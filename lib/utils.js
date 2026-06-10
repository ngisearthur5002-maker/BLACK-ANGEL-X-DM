function isOwner(sender, ownerNumber) {
  if (!sender) return false;
  return sender.includes(ownerNumber);
}

module.exports = {
  isOwner
};