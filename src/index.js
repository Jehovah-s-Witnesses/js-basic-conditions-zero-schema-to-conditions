const account  = confirm('Do you want create account?');
let userName ;
let userPass;
const noneUser = 'Guest';

if (account) {
  userName = prompt('Enter your name');
  userPass =  prompt('Enter your pass');
  if (userName !== '' && userName !== null && userPass !== '' && userPass !== null) {
    alert(`Hi,${userName}.Your acc data will be saved.`);
  } else {
    alert('Your user data is incorrect. Guest mode is enabled.');
  }
} else {
  alert(`You are ${noneUser}`);
}

const subscription = confirm('Do you want create subscription?');
const basicMonthSubscription = 'Basic functionality - 5$ month';
const proMonthSubscription = 'Pro version - Basic + Personal support - 20$ month';
const premiumMonthSubscription = 'Premium - Pro + Personal assistant - 50$ month.';
const basicYearSubscription = 'You select 5$ in month. Only today you can create subscription on year an save 20$. Your amount was 40$.';
const proYearSubscription = 'Your select 20$ in month.Only today you can create subscription on year an save 40$. Your amount was 200$.';
const premiumYearSubscription = 'Your select 50$ in month.Only today you can create subscription on year an save 100$. Your amount was 500$.';
const warmMessage = 'Cancelled event';
let selectVariant;
const registeredUser = true;
const unknownUser = false;

if (subscription) {
  alert('Price of subscription has different packs:');
  alert(`1.${basicMonthSubscription} 2.${proMonthSubscription} 3.${premiumMonthSubscription}`);
  selectVariant = prompt('Select your subscription variant');

  if (selectVariant === '1') {
    alert(basicYearSubscription);
  } else if (selectVariant === '2') {
    alert(proYearSubscription);
  } else if (selectVariant === '3') {
    alert(premiumYearSubscription);
  } else {
    alert(warmMessage);
  }

  const yearPlan = confirm('Do you want a year plan?');

  if (yearPlan) {
    alert('You subscribed a year plan');

    if (account === registeredUser && selectVariant === '1' ) {
      alert(`${userName}, you selected base year subscription. Thank you`);
    } else if (account === unknownUser && selectVariant === '1') {
      alert(`${noneUser}, you selected base year subscription. Thank you`);
    } else if (account === registeredUser && selectVariant === '2') {
      alert(`${userName}, you selected pro year subscription. Thank you`);
    } else if (account === unknownUser && selectVariant === '2') {
      alert(`${noneUser}, you selected pro year subscription. Thank you.`);
    } else if (account === registeredUser && selectVariant === '3') {
      alert(`${userName}, you selected premium year subscription. Thank you`);
    } else if (account === unknownUser && selectVariant === '3'){
      alert(`${noneUser}, you selected premium year subscription. Thank you`);
    }


  } else {
    alert('Summary');

    if (account === registeredUser && selectVariant === '1') {
      alert(`${userName}, you selected base month subscription. Thank you`);
    } else if (account === unknownUser && selectVariant === '1') {
      alert(`${noneUser}, you selected base month subscription. Thank you.`);
    } else if (account === registeredUser && selectVariant === '2') {
      alert(`${userName}, you selected pro month subscription. Thank you`);
    } else if (account === unknownUser && selectVariant === '2') {
      alert(`${noneUser}, you selected pro month subscription. Thank you`);
    } else if (account === registeredUser && selectVariant === '3') {
      alert(`${userName}, you selected premium month subscription. Thank you`);
    } else if (account === unknownUser  && selectVariant === '3') {
      alert(`${noneUser}, you selected premium month subscription. Thank you`);
    }
  }

}


