require('dotenv').config()
import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import fetch from 'node-fetch'

const isHuman: Function = async function(clientToken: string) : Promise<boolean> {
    
    const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY, 
        response = clientToken

    return fetch(
        'https://www.google.com/recaptcha/api/siteverify',
        {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `secret=${SECRET_KEY}&response=${response}`,
        }
    ).then(r => r.json()).then((r) => {
        console.log("From ReCaptcha:", r);
        return r.success ? true : false
    }).catch(e => {
        console.error("Was not able to retrieve recaptcha token", e)
        return false;
    })
}

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    const {
        reCaptchaToken
    } = req.body

    if(reCaptchaToken === undefined) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            status: 400,
            body: {error: "No reCaptchaToken", result: null}
        };
        return Promise.resolve();
    }

    const isHumanRequest = await isHuman(reCaptchaToken)
    console.log("Message received", { ...req.body, isHumanRequest})
    context.res = {
        status: 200,
        body: {error: null, result: "Thanks for your message"}
        
    }
};






export default httpTrigger;