import Parse from 'parse/node'
import dotenv from 'dotenv'

dotenv.load()

Parse.initialize(
    process.env.PARSE_APPLICATION_ID,
    process.env.PARSE_JS_KEY,
    process.env.PARSE_MASTER_KEY
  );

  let SendPush = (alert, success_alert) => {

    let query = new Parse.Query(Parse.Installation)

    Parse.Push.send({
      where: query,
      data: {
      alert: alert
      }
    }, {
      success: function() {
      console.log(success_alert);
    },
      error: function(error) {
      console.log('Push error', error);
    }
    });

  }

  export default SendPush
