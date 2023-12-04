const cropPostContent = (content) => {
  if (content.length < 352) {
    return content;
  }
  return `${content.slice(0, 353)}...`;
};

export default cropPostContent;