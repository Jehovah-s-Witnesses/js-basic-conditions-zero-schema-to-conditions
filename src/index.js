const isNeedAccount = confirm('Do you want create account?');
let userName;
let userPass;
const noneUser = 'Guest';
let isAuthorizedUser = false;

if (isNeedAccount) {
  userName = prompt('Enter your name');
  userPass = prompt('Enter your pass');
  if (
    userName !== '' && userName !== null && userPass !== '' &&
    userPass !== null) {
    alert(`Hi,${userName}.Your acc data will be saved.`);
    isAuthorizedUser = true;
  } else {
    alert('Your user data is incorrect. Guest mode is enabled.');
  }
} else {
  alert(`You are ${noneUser}`);
}

const isNeedSubscription = confirm('Do you want create subscription?');
const basicMonthSubscriptionNote = 'Basic functionality - 5$ month';
const proMonthSubscriptionNote = 'Pro version - Basic + Personal support - 20$ month';
const premiumMonthSubscriptionNote = 'Premium - Pro + Personal assistant - 50$ month.';
const basicYearSubscriptionNote = 'You select 5$ in month. Only today you can create subscription on year an save 20$. Your amount was 40$.';
const proYearSubscriptionNote = 'Your select 20$ in month.Only today you can create subscription on year an save 40$. Your amount was 200$.';
const premiumYearSubscriptionNote = 'Your select 50$ in month.Only today you can create subscription on year an save 100$. Your amount was 500$.';
const warmMessage = 'Cancelled event';
let selectedVariant;
const userPlanBasic = 'basic';
const userPlanPro = 'pro';
const userPlanPremium = 'premium';
let isSelectYearPlan;
const result = 'Summary:';


if (isNeedSubscription) {
  alert('Price of subscription has different packs:');
  alert(`1.${basicMonthSubscriptionNote} 2.${proMonthSubscriptionNote} 3.${premiumMonthSubscriptionNote}`);
  selectedVariant = prompt('Select your subscription variant');

  if (
    selectedVariant !== null &&
    selectedVariant !== '' &&
    selectedVariant === '1'
  ) {
    alert(basicYearSubscriptionNote);
  } else if ( selectedVariant !== null &&
    selectedVariant !== '' && selectedVariant === '2') {
    alert(proYearSubscriptionNote);
  } else if ( selectedVariant !== null &&
    selectedVariant !== '' && selectedVariant === '3') {
    alert(premiumYearSubscriptionNote);
  } else {
    alert(warmMessage);
  }

  if (selectedVariant !== null && selectedVariant !== '') {
     isSelectYearPlan = confirm('Do you want a year plan?');

    if (isSelectYearPlan) {
      alert('You subscribed a year plan');
    }
  }



  if (selectedVariant === '1'
  ) { alert(result);
    alert(
      `${isAuthorizedUser ? userName : noneUser}, you selected ${userPlanBasic} ${isSelectYearPlan ? 'year' : 'month'} subscription. Thank you`,
    );
  } else if (selectedVariant === '2') {
    alert(result);
    alert(
      `${isAuthorizedUser ? userName : noneUser}, you selected ${userPlanPro} ${isSelectYearPlan ? 'year' : 'month'} subscription. Thank you`,
    );
  } else if (selectedVariant === '3') {
    alert(result);
    alert(
      `${isAuthorizedUser ? userName : noneUser}, you selected ${userPlanPremium} ${isSelectYearPlan ? 'year' : 'month'} subscription. Thank you`,
    );
  }
} else {
  alert(warmMessage);
}


