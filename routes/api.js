import express from 'express';
const router = express.Router();

// Controllers
import ContactUsController from '../controllers/contact-us.controller';
import { validation, schemas } from '../middlewares/validation';
const contactUsController = new ContactUsController();

// ContactUs
router.get('/ping', (req, res) => contactUsController.pingServer(req, res));
router.post('/contact', validation(schemas.contactData), (req, res) => contactUsController.contact(req, res));

export default router;