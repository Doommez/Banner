export const chooseSubscription = (fieldSelector, subscriptionsSelector, activeClass, submitSubscriptionSelector, selectedFirstElement = true) => {

  let currentSubscription = null;
  const field = document.querySelector(fieldSelector);
  const subscriptions = document.querySelectorAll(subscriptionsSelector);
  const submitBtn = document.querySelector(submitSubscriptionSelector);
  let currentURL = null;

  function selectCurrentSubscription(subscriptions, index, activeClass) {
    subscriptions[index].classList.add(activeClass)
    currentSubscription = subscriptions[index];
    currentURL = currentSubscription.firstElementChild.href;
  }

  function setListenerSelectedSub(e) {
    e.preventDefault()
    subscriptions.forEach((subscription, index) => {
      if (subscription.contains(e.target)) {
        if (currentSubscription) {
          currentSubscription.classList.remove(activeClass);
        }
        selectCurrentSubscription(subscriptions, index,  activeClass)
      }
    })
  }

  function goSubscription(e) {
    e.preventDefault()
    location.href = currentURL;
  }

  function setListeners() {
    field.addEventListener('click', setListenerSelectedSub);
    submitBtn.addEventListener('click', goSubscription);
  }

  function destroyListeners() {
    field.removeEventListener('click', setListenerSelectedSub);
    submitBtn.removeEventListener('click', goSubscription);
  }

  if (selectedFirstElement) {
    selectCurrentSubscription(subscriptions,0, activeClass);
  }

  setListeners();

  return{
    destroyListeners,
  }
}
