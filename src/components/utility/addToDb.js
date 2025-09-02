import { toast } from "react-toastify";

const getStoredReadList = () => {
  //Checking if the list named "read-list" is already in the local storage
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  }
  return [];
};

const addToStoredList = (id) => {
  // get the list from the local storage named "read-list"
  const storedList = getStoredReadList();

  if (storedList.includes(id)) {
    toast.error("Already in the list", { autoClose: 1000 });
    return;
  } else {
    storedList.push(id);
    const storedlistStr = JSON.stringify(storedList);
    //save the list to the local storage named "read-list"
    localStorage.setItem("read-list", storedlistStr);
    toast.success("Added to the list", { autoClose: 1000 });
  }
};

const addToStoredWishlist = (id) => {
  const storedList = getStoredWishlist();
  if (storedList.includes(id)) {
    toast.error("Already in the list", { autoClose: 1000 });
    return;
  } else {
    storedList.push(id);
    const storedlistStr = JSON.stringify(storedList);
    localStorage.setItem("wishlist-list", storedlistStr);
    toast.success("Added to the list", { autoClose: 1000 });
  }
};

const getStoredWishlist = () => {
  const storedListStr = localStorage.getItem("wishlist-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  }
  return [];
};

export {
  getStoredReadList,
  getStoredWishlist,
  addToStoredList,
  addToStoredWishlist,
};
