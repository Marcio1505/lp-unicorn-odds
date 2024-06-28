const IntlTelFieldUtils = {
    /**
     * Capitalizes first letter of text.
     * @param text Input value
     * @see https://stackoverflow.com/a/1026087
     */
    capitalizeFirstLetter(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    },
    /**
     * Inserts a sibling element after a given element.
     * @param referenceNode Element of reference.
     * @param newChild Element to insert.
     * @see https://stackoverflow.com/a/4793630
     */
    insertAfter(referenceNode, newChild) {
      if (newChild == null) {
        return;
      }
  
      referenceNode?.parentNode?.insertBefore(
        newChild,
        referenceNode?.nextSibling
      );
    }
  };
  
  export default IntlTelFieldUtils;
  