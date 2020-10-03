exports.getUsers = async (req, res) => {
  try {
    res.status(200).json([{ first: "Thomas", last: "Tester" }]);
  } catch (error) {
    res.status(500).json({ message: "Error..." });
  }
};
