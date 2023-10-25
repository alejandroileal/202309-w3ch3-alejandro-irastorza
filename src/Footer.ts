export const renderFooter = (parentElement: HTMLElement) => {
  parentElement.innerHTML += `<footer>
  <address>® Pet List All Rights Reserved <a href="google.com">Donate</a></address>
</footer>`;

  return parentElement;
};
