 let interviewList = [];
let rejectedList = [];
let currentStatus ='all';

let total = document.getElementById('total');
let interview = document.getElementById('interviewCount');
let rejected = document.getElementById('rejectedCount');
let jobTotal = document.getElementById('job-count');
let Others = document.getElementById('others');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');
const filteredSection = document.getElementById('filtered-section');

const allCardSection = document.getElementById('allCard');
const mainContainer = document.getElementById('main');

function calculateCount(){
    total.innerText = allCardSection.children.length;
  interview.innerText = interviewList.length;
  rejected.innerText = rejectedList.length;
jobTotal.innerText = allCardSection.children.length;

}
calculateCount();

function refreshCurrentTab() {

    if (currentStatus === 'interview-filter-btn') {
        renderInterview();
    }

    else if (currentStatus === 'rejected-filter-btn') {
        renderRejected();
    }
}

function jobHeader() {
    const totalJobs = allCardSection.children.length;

    if (currentStatus === 'all-filter-btn') {
        Others.innerText = "";
        jobTotal.innerText = totalJobs;
    }

    else if (currentStatus === 'interview-filter-btn') {
        Others.innerText = interviewList.length + " of ";
        jobTotal.innerText = totalJobs;
    }

    else if (currentStatus === 'rejected-filter-btn') {
        Others.innerText = rejectedList.length + " of ";
        jobTotal.innerText = totalJobs;
    }
}

function toggleStyle(id){
    allFilterBtn.classList.remove('bg-blue-500','text-white');
interviewFilterBtn.classList.remove('bg-blue-500','text-white');
rejectedFilterBtn.classList.remove('bg-blue-500','text-white');

allFilterBtn.classList.add('bg-gray-100','text-black');
interviewFilterBtn.classList.add('bg-gray-100','text-black');
rejectedFilterBtn.classList.add('bg-gray-100','text-black');

const selected = document.getElementById(id);
selected.classList.remove('bg-gray-100','text-black');
selected.classList.add('bg-blue-500','text-white');

currentStatus = id;
if(id == 'interview-filter-btn'){
    allCardSection.classList.add('hidden');
    filteredSection.classList.remove('hidden');
renderInterview();
}
else if(id == 'all-filter-btn'){
    filteredSection.classList.add('hidden');
    allCardSection.classList.remove('hidden');
    renderTotal();
}
else if(id == 'rejected-filter-btn'){
    allCardSection.classList.add('hidden');
    filteredSection.classList.remove('hidden');
renderRejected();
}
jobHeader();
}

mainContainer.addEventListener('click',function(event){
if(event.target.classList.contains('interview-btn')){
    const parentNode = event.target.parentNode.parentNode;
const cardName = parentNode.querySelector('.cardName').innerText;
const post = parentNode.querySelector('.postName').innerText;
const info = parentNode.querySelector('.info').innerText;
const notes = parentNode.querySelector('.notes').innerText;
parentNode.querySelector('.status').innerText = 'INTERVIEW';
parentNode.querySelector('.status').classList.remove('text-[#EF4444]');
parentNode.querySelector('.status').classList.add('text-[#10B981]');
parentNode.querySelector('.status').classList.add('font-bold');

let cardinfo = {
    cardName,
    post,
    info,
    status: "INTERVIEW",
    notes
};

        interviewList = interviewList.filter(item => item.cardName !== cardName);
        rejectedList = rejectedList.filter(item => item.cardName !== cardName);
        interviewList.push(cardinfo);
        calculateCount();
        jobHeader();
        refreshCurrentTab();

}
else if(event.target.classList.contains('rejected-btn')){
    const parentNode = event.target.parentNode.parentNode;
const cardName = parentNode.querySelector('.cardName').innerText;
const post = parentNode.querySelector('.postName').innerText;
const info = parentNode.querySelector('.info').innerText;
const status = parentNode.querySelector('.status');
const notes = parentNode.querySelector('.notes').innerText;
parentNode.querySelector('.status').innerText = 'REJECTED';
parentNode.querySelector('.status').classList.add('text-[#EF4444]');
parentNode.querySelector('.status').classList.add('font-bold');

let cardinfo = {
    cardName,
    post,
    info,
    status: "REJECTED",
    notes
};


        interviewList = interviewList.filter(item => item.cardName !== cardName);
        rejectedList = rejectedList.filter(item => item.cardName !== cardName);

        rejectedList.push(cardinfo);
        calculateCount();
        jobHeader();
        refreshCurrentTab();
}

else if (event.target.closest('.delete-btn')) {
    const parentNode = event.target.closest('.flex');
    const cardName = parentNode.querySelector('.cardName').innerText;

    interviewList = interviewList.filter(item => item.cardName !== cardName);
    rejectedList = rejectedList.filter(item => item.cardName !== cardName);
    parentNode.remove();
    calculateCount();
    jobHeader();
    refreshCurrentTab();
    renderTotal();
} 



});

function renderTotal(){
    if(allCardSection.children.length === 0){

    allCardSection.innerHTML = `
        <div class="text-center my-10 shadow mx-auto py-10 sm:py-28">
            <i class="fa-solid fa-file-lines text-8xl text-[#7DA8FF]"></i>
            <p class="mt-4 text-2xl font-semibold leading-8">No jobs available</p>
            <p class="text-gray-500">Check back soon for new job opportunities</p>
        </div>
    `;
    return;
}}


function renderInterview(){
    if(interviewList.length === 0){
    filteredSection.innerHTML = `
       <div class="text-center my-10 shadow mx-auto py-10 sm:py-28">
            <i class="fa-solid fa-file-lines text-8xl text-[#7DA8FF]"></i>
            <p class="mt-4 text-2xl font-semibold leading-8">No jobs available</p>
            <p class="text-gray-500">Check back soon for new job opportunities</p>
        </div>
    `;
    return;
}
    filteredSection.innerHTML = "";

for(let interview of interviewList){
    console.log(interview);
    let div = document.createElement('div');
    div.className = 'flex justify-between p-4 mt-4 border';
    div.innerHTML = `
     <div class="card">
    <!-- Main Part -->
     <div class="">
      
           <p class="cardName text-3xl font-medium">${interview.cardName}</p>
           <p class="postName">${interview.post}</p>
            <p class=" info my-5">${interview.info}</p>
            <div class="bg-gray-200 px-3 py-2 rounded-sm max-w-3/5 sm:max-w-2/5 lg:max-w-1/5 text-center mb-2">
                       <p class="status text-[#10B981] font-bold">${interview.status}</p>
            </div>

       <p class="notes">${interview.notes}</p>
     </div>
    
    
       <div class="flex gap-4 mt-5">
        <button class="interview-btn border border-green-500 text-green-500 font-bold px-4 py-2 rounded-sm">INTERVIEW</button>
        <button class="rejected-btn border border-red-500 text-red-500 font-bold px-4 py-2 rounded-sm">REJECTED</button>
       </div>
 </div>
 <div><button class="delete-btn border border-gray-300 p-1 rounded-full">
      <i class="fa-regular fa-trash-can"></i>
       </button></div>
    `
filteredSection.appendChild(div);
}

}
function renderRejected(){
    if(rejectedList.length === 0){
    filteredSection.innerHTML = `
        <div class="text-center my-10 shadow mx-auto py-10 sm:py-28">
            <i class="fa-solid fa-file-lines text-8xl text-[#7DA8FF]"></i>
            <p class="mt-4 text-2xl font-semibold leading-8">No jobs available</p>
            <p class="text-gray-500">Check back soon for new job opportunities</p>
        </div>
    `;
    return;
}
    filteredSection.innerHTML = "";

for(let rejects of rejectedList){
    console.log(rejects);
    let div = document.createElement('div');
    div.className = 'flex justify-between p-4 mt-4 border';
    div.innerHTML = `
     <div class="card ">
    <!-- Main Part -->
    <div class="">
      
           <p class="cardName text-3xl font-medium">${rejects.cardName}</p>
           <p class="postName">${rejects.post}</p>
            <p class=" info my-5">${rejects.info}</p>
            <div class="bg-gray-200 px-3 py-2 rounded-sm max-w-3/5 sm:max-w-2/5 lg:max-w-1/5 text-center mb-2">
                       <p class="status text-[#EF4444] font-bold">${rejects.status}</p>
            </div>

       <p class="notes">${rejects.notes}</p>
     </div>
    
    
       <div class="flex gap-4 mt-5">
        <button class="interview-btn border border-green-500 text-green-500 font-bold px-4 py-2 rounded-sm">INTERVIEW</button>
        <button class="rejected-btn border border-red-500 text-red-500 font-bold px-4 py-2 rounded-sm">REJECTED</button>
       </div>
       
 </div>
 <div><button class="delete-btn border border-gray-300 p-1 rounded-full">
      <i class="fa-regular fa-trash-can"></i>
       </button></div>
    `
filteredSection.appendChild(div);
}

}
