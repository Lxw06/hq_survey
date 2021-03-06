const keys = require("../../config/keys");
module.exports = survey => {
  //return "<div>" + survey.body + "</div>";
  // this is inside the email, so we cannot use relativ domain
  return `
  <html>
    <body>
       <div style ="text-align: center;">
          <h3> I'd like your input !</h3>
          <p> Please answer the follwoing question: </p>
           <p>${survey.body} </p>
           <div>
             <a href ="${keys.redirectDomain}/api/surveys/thanks">Yes </a>
           </div>
           <div>
             <a href ="${keys.redirectDomain}/api/surveys/thanks">No </a>
           </div>
       </div>
    </body>
  </html>
  `;
};
