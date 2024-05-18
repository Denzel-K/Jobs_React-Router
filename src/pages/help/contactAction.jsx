import { redirect } from "react-router-dom";

/* eslint-disable no-unused-vars */
export const contactAction = async ({ request }) => {
    const data = await request.formData();

    const submission = {
        email: data.get('email'),
        message: data.get('message')
    }

    console.log(submission);

    //send post request
    if (submission.message.length < 10){
        return {error: 'Message must be more than 10 char long'}
    }

    //redirect user
    return redirect('/')
}