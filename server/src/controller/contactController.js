const Contact = require('../model/Contact');

exports.createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create a new contact document
    const newContact = new Contact({
      name,
      email,
      message,
    });

    // Save the contact to the database
    await newContact.save();

    res.json({ success: true });
  } catch (error) {
    console.error('Failed to save contact:', error);
    res.status(500).json({ success: false, error: 'Failed to save contact' });
  }
};
