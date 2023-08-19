export const decodeString = (str) =>
  decodeURIComponent(
    Array.prototype.map
      .call(atob(str), (c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );

  export const encodeString = (str) =>
  btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) =>
      String.fromCharCode(parseInt(p1, 16))
    )
  );