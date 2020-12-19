export default class ContactUsController {

    async pingServer(req, res) {
        return res.status(200).json({ message: "I am alive!" });
    }

    async contact(req, res) {
        return res.status(200).json({ message: "Your message has been sent!" });
    }
}