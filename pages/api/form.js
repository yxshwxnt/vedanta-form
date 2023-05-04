export default function handler(req, res) {
    if (req.method === 'POST') {
        // Store the form data in your database or other storage solution
        const formData = req.body;
        console.log(formData);
        res.send('Form data received');
    } else {
        console.log("error");
    }
}