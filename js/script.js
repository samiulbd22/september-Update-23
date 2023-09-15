const members = {
    khalaBill       :400,
    netBill         :140,
    serviceBill     :35,
    othersBill      :0,
    runningMonth    :"September-23",
    previousMonth   :"August-23", // new add
    upComingMonth   :"October 1,2023",
    runningMealRate :81,

    "01814843266":{
        name:"Istiaq Ahmad Udoy",
        pre_previous_payable:3000,
        previous_paid       :5000,
        previous_dining_cost:2184,
        payment             :{
                                "10/09/23-Cash":5000
                            },
        // running month
        stay_cost       :2200,
        garage_cost     :0,
        running_payable :2959,
        running_paid    :5000,
        running_meal    :8,
        // method calling
        previousAddedDining,
        previousDue,
        previuosDiningRefound,
        previousRemainingDue,
        runningDue,
        runningAddedDining,
        runningDiningCost,
        runningRemainingDiningCost,
        runningDueDiningCost,
        totalCost,
        //memberMessage 
        message:"<h2>আপনাকে গত মাসের মিলের বাজার বাবত দিতে হবে <strong>342</strong> টাকা । </h2>"
    },
    "01922362569":{ //01922362569
        name:"Md Moniruzzaman",
        pre_previous_payable:2742,
        previous_paid       :4220,
        previous_dining_cost:1400,
        payment             :{
                                "10/09/23-Cash":2000,
                                "15/09/23-Cash":500,
                            },
        // running month
        stay_cost       :2000,
        garage_cost     :0,
        running_payable :2497,
        running_paid    :2000,
        running_meal    :15,
        // method calling
        previousAddedDining,
        previousDue,
        previuosDiningRefound,
        previousRemainingDue,
        runningDue,
        runningAddedDining,
        runningDiningCost,
        runningRemainingDiningCost,
        runningDueDiningCost,
        totalCost,
        //memberMessage
        message:`<h2>Running due &nbsp;<strong style='color:red; font-weight: 600;'>${772} &nbsp;</strong>TK.</h2>
        <p>If this due doesn't clear before Eid-ul-Adha you couldn't run your dining before 10<sup>th</sup> July</p>`
    },
    "01532023080":{
        name:"Sony Hasan",
        pre_previous_payable:4191,
        previous_paid       :5500,
        previous_dining_cost:1400,
        payment             :{
            "10/09/23-bkash":3500
        },
        // running month
        stay_cost       :2500,
        garage_cost     :500,
        running_payable :3666,
        running_paid    :3500,
        running_meal    :0,
        // method calling
        previousAddedDining,
        previousDue,
        previuosDiningRefound,
        previousRemainingDue,
        runningDue,
        runningAddedDining,
        runningDiningCost,
        runningRemainingDiningCost,
        runningDueDiningCost,
        totalCost,
        //memberMessage
        message:`<h2>Running due &nbsp;<strong style='color:red; font-weight: 600;'>${358} &nbsp;</strong>TK.</h2>
        <p>If this due doesn't clear before Eid-ul-Adha you couldn't run your dining before 10<sup>th</sup> July</p>`
    },
    "01925315230":{
        name:"Masum",
        pre_previous_payable:4775,
        previous_paid       :7000,
        previous_dining_cost:1960,
        payment             :undefined,
        // running month
        stay_cost       :4500,
        garage_cost     :0,
        running_payable :4810,
        running_paid    :0,
        running_meal    :17,
        // method calling
        previousAddedDining,
        previousDue,
        previuosDiningRefound,
        previousRemainingDue,
        runningDue,
        runningAddedDining,
        runningDiningCost,
        runningRemainingDiningCost,
        runningDueDiningCost,
        totalCost,
        //memberMessage
        message:"<h2>আপনি গত মাসের মিলের বাজার বাবত ফিরত পাচ্ছেন <strong>115</strong> টাকা ।</h2>"
    },
    "01640454889":{
        name:"Imran",
        pre_previous_payable:3053,
        previous_paid       :5000,
        previous_dining_cost:2912,
        payment             :{"13/09/23-Cash":6000},
        // running month
        stay_cost       :2330,
        garage_cost     :0,
        running_payable :3870,
        running_paid    :6000,
        running_meal    :28,
        // method calling
        previousAddedDining,
        previousDue,
        previuosDiningRefound,
        previousRemainingDue,
        runningDue,
        runningAddedDining,
        runningDiningCost,
        runningRemainingDiningCost,
        runningDueDiningCost,
        totalCost,
        //memberMessage 
        message:`<h2>Running due &nbsp;<strong style='color:red; font-weight: 600;'>${0} &nbsp;</strong>TK.</h2>
        <p>If this due doesn't clear before Eid-ul-Adha you couldn't run your dining before 10<sup>th</sup> July</p>`
    },
    "01738393696":{
        name:"Amrul Qais",
        pre_previous_payable:2803,
        previous_paid       :6500,
        previous_dining_cost:2128,
        payment             :{
            "03/09/23-bkash":5000
        },
        // running month
        stay_cost       :3000,
        garage_cost     :0,
        running_payable :2006,
        running_paid    :5000,
        running_meal    :13,
        // method calling
        previousAddedDining,
        previousDue,
        previuosDiningRefound,
        previousRemainingDue,
        runningDue,
        runningAddedDining,
        runningDiningCost,
        runningRemainingDiningCost,
        runningDueDiningCost,
        totalCost,
        //memberMessage
        message:"<h2>আপনাকে গত মাসের মিলের বাজার বাবত দিতে হবে <strong>465</strong> টাকা । </h2>"
    },
    "01714443406":{
        name:"Khondokar Emon Ahmed",
        pre_previous_payable:6000,
        previous_paid       :8000,
        previous_dining_cost:455,
        payment             :{
            "30/07/23-Advance":2000,
            "29/08/23-Cash":1000,
            "02/09/23-Cash":1000,
            "06/09/23-Cash":3000,
            "10/09/23-Cash":1000
        },
        // running month
        stay_cost       :3000,
        garage_cost     :0,
        running_payable :2030,
        running_paid    :0,
        running_meal    :30,
        // method calling
        previousAddedDining,
        previousDue,
        previuosDiningRefound,
        previousRemainingDue,
        runningDue,
        runningAddedDining,
        runningDiningCost,
        runningRemainingDiningCost,
        runningDueDiningCost,
        totalCost,
        //memberMessage
        message:"<h2>আপনাকে গত মাসের মিলের বাজার বাবত দিতে হবে <strong>465</strong> টাকা । </h2>"
    }, 
};
// outside of object
const KhalaBill     = members.khalaBill;
const netBill       = members.netBill;
const serviceBill   = members.serviceBill;
const otherBill     = members.othersBill;   
const diningRate    = members.runningMealRate;
//method call
function previousAddedDining(){
    if(this.previous_paid > this.pre_previous_payable){
        return (this.previous_paid - this.pre_previous_payable);
    }else{
        return 0;
    }
}
// previous due
function previousDue(){
    if(this.pre_previous_payable > this.previous_paid){
        return (this.pre_previous_payable - this.previous_paid);
    }else{
        return 0;
    }
}
// previous dining extra money back
function previuosDiningRefound(){
    if(this.previousAddedDining() > this.previous_dining_cost){
        return (this.previousAddedDining() - this.previous_dining_cost);
    }else{
        return 0;
    }
}
// previous remaing due
function previousRemainingDue(){
    if(this.previous_dining_cost > this.previousAddedDining()){
        return (this.previous_dining_cost - this.previousAddedDining());
    }else{
        return 0;
    }
}
// previous remaing due
function previousRemainingDue(){
    if(this.previous_dining_cost > this.previousAddedDining()){
        return (this.previous_dining_cost - this.previousAddedDining());
    }else{
        return 0;
    }
}
//running due
function runningDue(){
    if(this.running_payable > this.running_paid){
        return (this.running_payable - this.running_paid);
    }else{
        return 0;
    }
}
// running added in dining  
function runningAddedDining(){
    if(this.running_paid > this.running_payable){
        return (this.running_paid - this.running_payable)
    }else{
        return 0;
    }
}
// running dining cost
function runningDiningCost(){
    
    return (diningRate * this.running_meal);
}
// remaining dining Amount still now
function runningRemainingDiningCost(){
    if(this.runningAddedDining() > this.runningDiningCost()){
        return (this.runningAddedDining() - this.runningDiningCost())
    }else{
        return 0;
    }
}
//running dining due still now
function runningDueDiningCost(){
    if(this.runningDiningCost() > this.runningAddedDining()){
        return (this.runningDiningCost() - this.runningAddedDining())
    }else{
        return 0;
    }
}
//total amount 
function totalCost(){
    return (this.stay_cost + KhalaBill + netBill + serviceBill + otherBill +this.garage_cost +this.previousRemainingDue()) - this.previuosDiningRefound();
}      
// title
document.querySelector("title").textContent = members.runningMonth;
// title
const notice = document.getElementById("payList"); 
const noteMe = document.getElementById("noteMe");
const exitButton = document.getElementById("exitButton")
// heading
const personName        = document.getElementById("personName");
const personCost        = document.getElementById("personCost");
const personPreCost     = document.getElementById("personPreCost");
const personMealCost    = document.getElementById("personMealCost");
const memberMealList    = document.getElementById("memberMealList");
// heading
// details body
const personPayable     = document.getElementById("personPayable");
const personDetails     = document.getElementById("personDetails");
const personPreDetails  = document.getElementById("personPreDetails");
const personMealDetails = document.getElementById("personMealDetails");
const memberMealDetails = document.getElementById("memberMealDetails");
// details body
// footer
const fistPage = document.getElementById("f1");
const secondPage = document.getElementById("f2");
const thirdPage = document.getElementById("f3");
const fourthPage = document.getElementById("f4");
const fifthPage = document.getElementById("f5");
// footer
// button
const firstBtn          = document.getElementById("firstNext");
const secondBtn1        = document.getElementById("secondBack");
const secondBtn2        = document.getElementById("secondNext");
const thirdBtn1         = document.getElementById("thirdBack");
const thirdBtn2         = document.getElementById("thirdNext");
const fourthBtn1        = document.getElementById("fourthBack");
const fourthBtn2        = document.getElementById("fourthNext");
const fifthBack         = document.getElementById("fifthBack");
// button
notice.addEventListener("click",payNotice);
function payNotice(){
    // notice.style.display = "block";
    noteMe.classList.add("show-me")
}
exitButton.addEventListener("click",exitMe);
function exitMe(){
    noteMe.classList.remove("show-me")
}
firstBtn.addEventListener("click",firstButton);
function firstButton(){
    personName.classList.remove("show-me");
    personPayable.classList.remove("show-me")
    fistPage.classList.remove("show-me")
    personCost.classList.add("show-me")
    personDetails.classList.add("show-me")
    secondPage.classList.add("show-me")
    secondBtn1.addEventListener("click",secondButtonButton);
    function secondButtonButton(){
        personCost.classList.remove("show-me")
        personDetails.classList.remove("show-me")
        secondPage.classList.remove("show-me")
        personName.classList.add("show-me")
        personPayable.classList.add("show-me")
        fistPage.classList.add("show-me")
    }
    secondBtn2.addEventListener("click",secondButtonNext)
    function secondButtonNext(){
        personCost.classList.remove("show-me")
        personDetails.classList.remove("show-me")
        secondPage.classList.remove("show-me")
        personPreCost.classList.add("show-me")
        personPreDetails.classList.add("show-me")
        thirdPage.classList.add("show-me")
        thirdBtn1.addEventListener("click",thirdButtonBack)
        function thirdButtonBack(){
            personCost.classList.add("show-me")
            personDetails.classList.add("show-me")
            secondPage.classList.add("show-me")
            personPreCost.classList.remove("show-me")
            personPreDetails.classList.remove("show-me")
            thirdPage.classList.remove("show-me")
        }
        thirdBtn2.addEventListener("click",thirdButtonNext)
        function thirdButtonNext(){
            personPreCost.classList.remove("show-me")
            personPreDetails.classList.remove("show-me")
            thirdPage.classList.remove("show-me")
            personMealCost.classList.add("show-me")
            personMealDetails.classList.add("show-me")
            fourthPage.classList.add("show-me")
            fourthBtn1.addEventListener("click",fourthButtonBack)
            function fourthButtonBack(){
                personPreCost.classList.add("show-me")
                personPreDetails.classList.add("show-me")
                thirdPage.classList.add("show-me")
                personMealCost.classList.remove("show-me")
                personMealDetails.classList.remove("show-me") 
                fourthPage.classList.remove("show-me")
            }
            fourthBtn2.addEventListener("click",fourthButtonNext)
            function fourthButtonNext(){
                personMealCost.classList.remove("show-me")
                personMealDetails.classList.remove("show-me")
                fourthPage.classList.remove("show-me")
                memberMealList.classList.add("show-me")
                memberMealDetails.classList.add("show-me")
                fifthPage.classList.add("show-me")
                fifthBack.addEventListener("click",fifthButtonBack)
                function fifthButtonBack(){
                    memberMealList.classList.remove("show-me")
                    memberMealDetails.classList.remove("show-me")
                    fifthPage.classList.remove("show-me")
                    personMealCost.classList.add("show-me")
                    personMealDetails.classList.add("show-me")
                    fourthPage.classList.add("show-me")
                }
            }
        }
    } 
}
//clock Schedule
function dateClock(){
    const startDate     = new Date();
    const endDate       = new Date(members.upComingMonth);
    const day           = startDate.getDate();
    const month         = startDate.getMonth();
    const year          = startDate.getFullYear();
    const myMonth       =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    document.getElementById("timeMe").innerHTML = `<span class="clock-data"><h4>${day}</h4></span><span class="clock-data">${myMonth[month]}</span><span class="clock-data">${year}</span>`;
    if (startDate > endDate){
        document.getElementById("timeMe").innerHTML = `<span class="clock-data">00</span><span class="clock-data">00</span><span class="clock-data">00</span>`;
    }
    
}
dateClock();

const number = document.getElementById("user-number");
number.addEventListener("keyup",opener);
let user_number
function opener(){
    user_number = number.value;
    if(user_number.length === 11){
        if(user_number === "01710430501" || user_number === "01814843266" 
        ||user_number === "01922362569" || user_number === "01532023080"
        || user_number === "01925315230" || user_number === "01640454889"
        || user_number === "01738393696" || user_number === "01714443406"){
            document.getElementById("user-btn").classList.add("user-btn-show");
            const enterBtn = document.getElementById("user-btn-enter");
            enterBtn.addEventListener("click", messCalculate);
            function messCalculate(){
             document.getElementById("registrar-page").classList.add("wrapper-hide");
             document.getElementById("mess-front").classList.add("mess-page-show");
            // front person,month name,total cost
            personName.innerHTML = `<span class="center-fix" id="personName">${members[user_number].name}</span>`;
            document.getElementById('current-month').textContent = members.runningMonth;
            document.getElementById("total-cost").innerHTML = `<h4>${members[user_number].totalCost()}&nbsp;<span>Tk</span></h4>`;
            // front person,month name,total cost end
            // frontend notice person month total cost start notice-month-name"><h4>Month</h4>
            document.getElementById("notice-total-amount").innerHTML = `<h6>&nbsp;${members[user_number].totalCost()}<span>TK</span></h6>`;
            document.getElementById("notice-month-name").innerHTML = `<h5>${members.runningMonth}</h5>`;

            const payment = members[user_number].payment;
            if(payment === undefined){
                document.getElementById("paymentListShowMe").innerHTML = `<tr class="data-center">
                <td colspan="3"><h3>your payment not yet added</h3></td></tr>`;
                }else{
                    let paidMe ='';
                    let paidMeSum = 0;
                    for(let pay in payment){
                         paidMe +=`<tr class="data-center"><td>${pay.slice(0,8)}</td><td>${pay.slice(9)}</td><td>${payment[pay]}</td></tr>`;
                         paidMeSum += payment[pay];
                    }
                    document.getElementById("paymentListShowMe").innerHTML = paidMe;
                    document.getElementById("payTotalSum").innerHTML=`<td colspan="2">total</td><td><h5>${paidMeSum}&nbsp;<span>TK</span></h5></td>`;
                }  
            }
            //current month in person details page
            document.getElementById("person-details-month").textContent =`Running ${members.runningMonth}`;
            document.getElementById("memberStayCost").textContent = members[user_number].stay_cost;
            document.getElementById("runningKhalaCost").textContent = KhalaBill;
            document.getElementById("running-net-cost").textContent = netBill;
            document.getElementById("running-service-cost").textContent = serviceBill;
            document.getElementById("running-other-cost").textContent = otherBill;
            document.getElementById("previous-get-in-dining").textContent = members[user_number].previuosDiningRefound();
            document.getElementById("previous-due-in-dining").textContent = members[user_number].previousRemainingDue();
            document.getElementById("garage-bill").textContent = members[user_number].garage_cost;
            document.getElementById("total-stay-amount").textContent = members[user_number].totalCost();
            //previous month in person details page
            document.getElementById("person-pre-month").textContent = members.previousMonth;
            document.getElementById("pre-payable").textContent = members[user_number].pre_previous_payable
            document.getElementById("pre-paid").textContent = members[user_number].previous_paid;
            document.getElementById("remaining-dining").textContent = members[user_number].previousAddedDining();
            document.getElementById("remaining-due").textContent = members[user_number].previous_dining_cost; 
            document.getElementById("getBack").textContent = members[user_number].previuosDiningRefound();
            document.getElementById("dueBack").textContent = members[user_number].previousRemainingDue();
            // running person meal details
            document.getElementById("meal-month").textContent = members.runningMonth;
            document.getElementById("totalMeal").innerHTML = `<h4>${members[user_number].running_meal}</h4>`;
            document.getElementById("meal-rate").innerHTML = `<h4>${members.runningMealRate}</h4>`;
            document.getElementById("meal-total").innerHTML = `<h4>${members[user_number].runningDiningCost()}</h4>`;
            document.getElementById("paidForDining").textContent = members[user_number].runningAddedDining();
            document.getElementById("reFoundDining").textContent = members[user_number].runningRemainingDiningCost();
            document.getElementById("dueIndining").textContent = members[user_number].runningDueDiningCost();
            document.getElementById("mealStatus").innerText = (members[user_number].runningDiningCost() < members[user_number].runningAddedDining()) ? 
            "GET": "DUE";
            document.getElementById("status-dining").innerText = (members[user_number].runningDiningCost() < members[user_number].runningAddedDining()) ? 
            "GET": "DUE";
            document.getElementById("comment-status").innerText = (document.getElementById("status-dining").innerText ==="GET")? document.getElementById("reFoundDining").innerText : document.getElementById("dueIndining").innerText;
            // all member meal detail
            const udoy              = members["01814843266"].name;
            const udoyMealCost      = members["01814843266"].runningDiningCost();
            const udoyMealPaid      = members["01814843266"].runningAddedDining();
            const udoyMealRemaining = members["01814843266"].runningRemainingDiningCost();
            const udoyMealDue       = members["01814843266"].runningDueDiningCost();
            document.getElementById("udoy").innerHTML = `<td>${udoy}</td><td>${udoyMealCost}</td><td class="bazar-amount">${udoyMealPaid}</td><td>${udoyMealRemaining}</td><td>${udoyMealDue}</td>`;
            const razu              = members["01922362569"].name; //Md Moniruzzaman|
            const razuMealCost      = members["01922362569"].runningDiningCost();
            const razuMealPaid      = members["01922362569"].runningAddedDining();
            const razuMealRemaining = members["01922362569"].runningRemainingDiningCost();
            const razuMealDue       = members["01922362569"].runningDueDiningCost();
            document.getElementById("razu").innerHTML = `<td>${razu}</td><td>${razuMealCost}</td><td class="bazar-amount">${razuMealPaid}</td><td>${razuMealRemaining}</td><td>${razuMealDue}</td>`;
            const sony              = members["01532023080"].name; 
            const sonyMealCost      = members["01532023080"].runningDiningCost();
            const sonyMealPaid      = members["01532023080"].runningAddedDining();
            const sonyMealRemaining = members["01532023080"].runningRemainingDiningCost();
            const sonyMealDue       = members["01532023080"].runningDueDiningCost();
            document.getElementById("sony").innerHTML = `<td>${sony}</td><td>${sonyMealCost}</td><td class="bazar-amount">${sonyMealPaid}</td><td>${sonyMealRemaining}</td><td>${sonyMealDue}</td>`;
            const masum              = members["01925315230"].name; 
            const masumMealCost      = members["01925315230"].runningDiningCost();
            const masumMealPaid      = members["01925315230"].runningAddedDining();
            const masumMealRemaining = members["01925315230"].runningRemainingDiningCost();
            const masumMealDue       = members["01925315230"].runningDueDiningCost();
            document.getElementById("masum").innerHTML = `<td>${masum}</td><td>${masumMealCost}</td><td class="bazar-amount">${masumMealPaid}</td><td>${masumMealRemaining}</td><td>${masumMealDue}</td>`;
            const imran              = members["01640454889"].name; 
            const imranMealCost      = members["01640454889"].runningDiningCost();
            const imranMealPaid      = members["01640454889"].runningAddedDining();
            const imranMealRemaining = members["01640454889"].runningRemainingDiningCost();
            const imranMealDue       = members["01640454889"].runningDueDiningCost();
            document.getElementById("imran").innerHTML = `<td>${imran}</td><td>${imranMealCost}</td><td class="bazar-amount">${imranMealPaid}</td><td>${imranMealRemaining}</td><td>${imranMealDue}</td>`;
            const amrul              = members["01738393696"].name; //
            const amrulMealCost      = members["01738393696"].runningDiningCost();
            const amrulMealPaid      = members["01738393696"].runningAddedDining();
            const amrulMealRemaining = members["01738393696"].runningRemainingDiningCost();
            const amrulMealDue       = members["01738393696"].runningDueDiningCost();
            document.getElementById("amrul").innerHTML = `<td>${amrul}</td><td>${amrulMealCost}</td><td class="bazar-amount">${amrulMealPaid}</td><td>${amrulMealRemaining}</td><td>${amrulMealDue}</td>`;
            const linja              = members["01714443406"].name; //01714443406
            const linjaMealCost      = members["01714443406"].runningDiningCost();
            const linjaMealPaid      = members["01714443406"].runningAddedDining();
            const linjaMealRemaining = members["01714443406"].runningRemainingDiningCost();
            const linjaMealDue       = members["01714443406"].runningDueDiningCost();
            document.getElementById("linja").innerHTML = `<td>${linja}</td><td>${linjaMealCost}</td><td class="bazar-amount">${linjaMealPaid}</td><td>${linjaMealRemaining}</td><td>${linjaMealDue}</td>`;
            //start point
         }else{
            console.log("hello")
        }
    }
}




