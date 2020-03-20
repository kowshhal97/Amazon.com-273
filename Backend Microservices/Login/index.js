var connection = new require('./kafka/connection');
const login=require('./login')

function handleTopicRequest(topic_name, fname) {
    //var topic_name = 'root_topic';
    var consumer = connection.getConsumer(topic_name);
    var producer = connection.getProducer();
    //console.log('Kafka Server is running ');
    consumer.on('message', function (message) {
        // console.log('Message received for ' + topic_name);
         
        var data = JSON.parse(message.value);
         console.log(data)
        fname.handle_request(data.data, function (err, res) {
            var payloads = [
                {
                    topic: "test2",
                    messages: JSON.stringify({
                        correlationId: data.correlationId,
                        data: res
                    }),
                    partition: 0
                }
            ];
             console.log(payloads)
            producer.send(payloads, function (err, data) {
                 console.log(data);
            });
            return;
        });

    });
}
// Add your TOPICs here
//first argument is topic name
//second argument is a function that will handle this topic request
handleTopicRequest("test", login);