import { Router } from "express"

import transporter from "../middleware/email.js";
import { renderContact, sendEmail } from "../controllers/emailController.js";

let router=Router();
router.get('/',renderContact)

router.post('/', sendEmail);

export default router