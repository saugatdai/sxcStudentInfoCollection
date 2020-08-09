document.addEventListener('DOMContentLoaded', function () {
    initializeMaterializeComponents();
    initializeOtherComponents();
});

function validateTextInputs() {
    // get the text inputs first
    const studentID = document.querySelector('#studentID');
    const fname = document.querySelector('#fname');
    const lname = document.querySelector('#lname');
    const mname = document.querySelector('#mname');
    const address = document.querySelector('#address');
    const email = document.querySelector('#email');
    const fatherName = document.querySelector('#fathername');
    const motherName = document.querySelector('#mothername');
    const fatherContact = document.querySelector('#fathercontact');
    const motherContact = document.querySelector('#mothercontact');
    const pob = document.querySelector('#pob');
    const nationality = document.querySelector('#nationality');
    const blockNo = document.querySelector('#blockNo');
    const perWardNo = document.querySelector('#perWardNo');
    const perMunVDC = document.querySelector('#perMunVDC');
    const perDistrict = document.querySelector('#perDistrict');
    const perZone = document.querySelector('#perZone');
    const perProvince = document.querySelector('#perProvince');
    const phoneOrCell = document.querySelector('#phoneOrCell');
    const tempBlockNo = document.querySelector('#tempBlockNo');
    const tempWardNo = document.querySelector('#tempWardNo');
    const tempMunVDC = document.querySelector('#tempMunVDC');
    const tempDistrict = document.querySelector('#tempDistrict');
    const tempZone = document.querySelector('#tempZone');
    const tempProvince = document.querySelector('#tempProvince');
    const tempPhoneCell = document.querySelector('#tempPhoneCell');
    const tempStudentEmail = document.querySelector('#tempStudentEmail');
    const tempAddress = document.querySelector('#tempAddress');
    const guardianName = document.querySelector('#guardianName');
    const guardianContactNo = document.querySelector('#guardianContactNo');
    const guardianPhoneNo = document.querySelector('#guardianPhoneNo');
    const guardianProfession = document.querySelector('#guardianProfession');
    const fatherProfession = document.querySelector('#fatherProfession');
    const motherProfession = document.querySelector('#motherProfession');
    const otherCaste = document.querySelector('#otherCaste');

    // get the drop-down inputs
    const gender = document.querySelector('#gender');
    const dob = document.querySelector('#dob');
    const bloodGroup = document.querySelector('#bloodGroup');
    const ruralMunicapility = document.querySelector('#ruralMunicipality');
    const program = document.querySelector('#program');
    const yearEnrolled = document.querySelector('#yearEnrolled');
    const currentyear = document.querySelector('#currentYear');
    const currentSemester = document.querySelector('#currentSemester');
    const level = document.querySelector('#level');
    const faculty = document.querySelector('#faculty');
    const section = document.querySelector('#section');
    const caste = document.querySelector('#caste');

    // clear errors
    studentID.classList.remove('red', 'lighten-3');
    fname.classList.remove('red', 'lighten-3');
    mname.classList.remove('red', 'lighten-3');
    lname.classList.remove('red', 'lighten-3');
    address.classList.remove('red', 'lighten-3');
    dob.classList.remove('red', 'lighten-3');
    email.classList.remove('red', 'lighten-3');
    fatherName.classList.remove('red', 'lighten-3');
    motherName.classList.remove('red', 'lighten-3');
    fatherContact.classList.remove('red', 'lighten-3');
    motherContact.classList.remove('red', 'lighten-3');
    pob.classList.remove('red', 'lighten-3');
    nationality.classList.remove('red', 'lighten-3');
    blockNo.classList.remove('red', 'lighten-3');
    perWardNo.classList.remove('red', 'lighten-3');
    perMunVDC.classList.remove('red', 'lighten-3');
    perDistrict.classList.remove('red', 'lighten-3');
    perZone.classList.remove('red', 'lighten-3');
    perProvince.classList.remove('red', 'lighten-3');
    phoneOrCell.classList.remove('red', 'lighten-3');
    tempBlockNo.classList.remove('red', 'lighten-3');
    tempWardNo.classList.remove('red', 'lighten-3');
    tempMunVDC.classList.remove('red', 'lighten-3');
    tempDistrict.classList.remove('red', 'lighten-3');
    tempZone.classList.remove('red', 'lighten-3');
    tempProvince.classList.remove('red', 'lighten-3');
    tempPhoneCell.classList.remove('red', 'lighten-3');
    tempStudentEmail.classList.remove('red', 'lighten-3');
    tempAddress.classList.remove('red', 'lighten-3');
    guardianName.classList.remove('red', 'lighten-3');
    guardianContactNo.classList.remove('red', 'lighten-3');
    guardianPhoneNo.classList.remove('red', 'lighten-3');
    guardianProfession.classList.remove('red', 'lighten-3');
    fatherProfession.classList.remove('red', 'lighten-3');
    motherProfession.classList.remove('red', 'lighten-3');
    otherCaste.classList.remove('red', 'lighten-3');


    // start validation
    if (studentID.value.length === 0) {
        studentID.classList.add('red', 'lighten-3');
        studentID.focus();
        M.toast({ html: "Invalid Student ID", classes: 'red darken-3' });
        return false;
    } else if (fname.value.length === 0) {
        fname.classList.add('red', 'lighten-3');
        fname.focus();
        M.toast({ html: "Invalid First Name", classes: 'red darken-3' });
        return false;
    } else if (lname.value.length === 0) {
        lname.classList.add('red', 'lighten-3');
        lname.focus();
        M.toast({ html: "Invalid Last Name", classes: 'red darken-3' });
        return false;
    } else if (gender.selectedIndex === 0) {
        M.toast({ html: "Select Proper Gender", classes: 'red darken-3' });
        return false;
    } else if (address.value.length < 2) {
        address.classList.add('red', 'lighten-3');
        address.focus();
        M.toast({ html: "Invalid address", classes: 'red darken-3' });
        return false;
    } else if (!dob.value) {
        dob.classList.add('red', 'lighten-3');
        dob.focus();
        M.toast({ html: "Invalid Date Of birth", classes: 'red darken-3' });
        return false;
    } else if (bloodGroup.selectedIndex === 0) {
        M.toast({ html: "Insert a proper blood group", classes: 'red darken-3' });
        return false;
    } else if (email.value.indexOf('@') < 1 || email.value.toLowerCase().substr(-11, 11) === '@sxc.edu.np') {
        email.classList.add('red', 'lighten-3');
        email.focus();
        M.toast({ html: "Email must be proper and must not have @sxc.edu.np domain", classes: 'red darken-3' });
    } else if (nationality.value.length === 0 || !(nationality.value in nationalities)) {
        nationality.classList.add('red', 'lighten-3');
        nationality.focus();
        M.toast({ html: "Invalid Nationality", classes: 'red darken-3' });
        return false;
    } else if (caste.selectedIndex === 0) {
        M.toast({ html: "Select a proper caste", classes: 'red darken-3' });
        return false;
    } else if (caste.value === 'Other' && otherCaste.value.length < 2) {
        otherCaste.classList.add('red', 'lighten-3');
        otherCaste.focus();
        M.toast({ html: "Specify the other type of caste detail properly", classes: 'red darken-3' });
        return false;
    } else if (pob.value.length < 2) {
        pob.classList.add('red', 'lighten-3');
        pob.focus();
        M.toast({ html: "Invalid Place of birth", classes: 'red darken-3' });
        return false;
    } else if (blockNo.value && (blockNo.value.length === 0 || isNaN(blockNo.value))) {
        blockNo.classList.add('red', 'lighten-3');
        blockNo.focus();
        M.toast({ html: "Invalid Block Number", classes: 'red darken-3' });
        return false;
    } else if (perWardNo.value.length === 0 || isNaN(perWardNo.value)) {
        perWardNo.classList.add('red', 'lighten-3');
        perWardNo.focus();
        M.toast({ html: "Invalid Permanent Ward Number", classes: 'red darken-3' });
        return false;
    } else if (perMunVDC.value.length === 0) {
        perMunVDC.classList.add('red', 'lighten-3');
        perMunVDC.focus();
        M.toast({ html: "Invalid Permanent Municipality/VDC", classes: 'red darken-3' });
        return false;
    } else if (perDistrict.value.length < 2 || !(perDistrict.value in districts)) {
        perDistrict.classList.add('red', 'lighten-3');
        perDistrict.focus();
        M.toast({ html: "Invalid Permanent District", classes: 'red darken-3' });
        return false;
    } else if (perZone.value.length < 2 || !(perZone.value in zones)) {
        perZone.classList.add('red', 'lighten-3');
        perZone.focus();
        M.toast({ html: "Invalid Permanent Zone", classes: 'red darken-3' });
        return false;
    } else if (perProvince.value.length < 2 || !(perProvince.value in provinces)) {
        perProvince.classList.add('red', 'lighten-3');
        perProvince.focus();
        M.toast({ html: "Invalid Permanent Province", classes: 'red darken-3' });
        return false;
    } else if (ruralMunicapility.selectedIndex === 0) {
        M.toast({ html: "Select a proper Rural/Municipality Option", classes: 'red darken-3' });
        return false;
    } else if (isNaN(phoneOrCell.value) ||
        phoneOrCell.value.length > 10 ||
        phoneOrCell.value.length < 9 ||
        (phoneOrCell.value.length === 10 && phoneOrCell.value.charAt(0) !== '9') ||
        phoneOrCell.value.length === 9 && phoneOrCell.value.charAt(0) !== '0') {
        phoneOrCell.classList.add('red', 'lighten-3');
        phoneOrCell.focus();
        M.toast({ html: "Phone or Cell may either be a mobile number with 10 digits or a 9 digit landline number", classes: 'red darken-3' });
        return false;
    } else if (tempBlockNo.value && (tempBlockNo.value.length === 0 || isNaN(tempBlockNo.value))) {
        tempBlockNo.classList.add('red', 'lighten-3');
        tempBlockNo.focus();
        M.toast({ html: "Invalid Temporary Block Number", classes: 'red darken-3' });
        return false;
    } else if (tempWardNo.value.length === 0 || isNaN(tempWardNo.value)) {
        tempWardNo.classList.add('red', 'lighten-3');
        tempWardNo.focus();
        M.toast({ html: "Invalid Temporary Ward Number", classes: 'red darken-3' });
        return false;
    } else if (tempMunVDC.value.length < 2) {
        tempMunVDC.classList.add('red', 'lighten-3');
        tempMunVDC.focus();
        M.toast({ html: "Invalid Temporary Municipality/VDC", classes: 'red darken-3' });
        return false;
    } else if (tempDistrict.value.length < 2 || !(tempDistrict.value in districts)) {
        tempDistrict.classList.add('red', 'lighten-3');
        tempDistrict.focus();
        M.toast({ html: "Invalid Temporary District", classes: 'red darken-3' });
        return false;
    } else if (tempZone.value.length < 2 || !(tempZone.value in zones)) {
        tempZone.classList.add('red', 'lighten-3');
        tempZone.focus();
        M.toast({ html: "Invalid Temporary Zone", classes: 'red darken-3' });
        return false;
    } else if (tempProvince.value.length < 2 || !(tempProvince.value in provinces)) {
        tempProvince.classList.add('red', 'lighten-3');
        tempProvince.focus();
        M.toast({ html: "Invalid Temporary Province", classes: 'red darken-3' });
        return false;
    } else if (isNaN(tempPhoneCell.value) ||
        tempPhoneCell.value.length > 10 ||
        tempPhoneCell.value.length < 9 ||
        (tempPhoneCell.value.length === 10 && tempPhoneCell.value.charAt(0) !== '9') ||
        tempPhoneCell.value.length === 9 && tempPhoneCell.value.charAt(0) !== '0') {
        tempPhoneCell.classList.add('red', 'lighten-3');
        tempPhoneCell.focus();
        M.toast({ html: "Temporary Phone or Cell may either be a mobile number with 10 digits or a 9 digit landline number", classes: 'red darken-3' });
        return false;
    } else if (tempAddress.value.length < 2) {
        tempAddress.classList.add('red', 'lighten-3');
        tempAddress.focus();
        M.toast({ html: "Invalid Temporary Address", classes: 'red darken-3' });
        return false;
    } else if (fatherName.value.length === 0) {
        fatherName.classList.add('red', 'lighten-3');
        fatherName.focus();
        M.toast({ html: "Invalid Father Name", classes: 'red darken-3' });
        return false;
    } else if (motherName.value.length === 0) {
        motherName.classList.add('red', 'lighten-3');
        motherName.focus();
        M.toast({ html: "Invalid Mother Name", classes: 'red darken-3' });
        return false;
    } else if (fatherContact.value && (isNaN(fatherContact.value) ||
        fatherContact.value.length > 10 ||
        fatherContact.value.length < 9 ||
        (fatherContact.value.length === 10 && fatherContact.value.charAt(0) !== '9') ||
        fatherContact.value.length === 9 && fatherContact.value.charAt(0) !== '0')) {
        fatherContact.classList.add('red', 'lighten-3');
        fatherContact.focus();
        M.toast({ html: "Father contact may either be a mobile number with 10 digits or a 9 digit landline number", classes: 'red darken-3' });
        return false;
    } else if (motherContact.value && (isNaN(motherContact.value) ||
        motherContact.value.length > 10 ||
        motherContact.value.length < 9 ||
        (motherContact.value.length === 10 && motherContact.value.charAt(0) !== '9') ||
        motherContact.value.length === 9 && motherContact.value.charAt(0) !== '0')) {
        motherContact.classList.add('red', 'lighten-3');
        motherContact.focus();
        M.toast({ html: "Mother contact may either be a mobile number with 10 digits or a 9 digit landline number", classes: 'red darken-3' });
        return false;
    } else if (fatherProfession.value && fatherProfession.value.length < 2) {
        fatherProfession.classList.add('red', 'lighten-3');
        fatherProfession.focus();
        M.toast({ html: "Invalid father profession", classes: 'red darken-3' });
        return false;
    } else if (motherProfession.value && motherProfession.value.length < 2) {
        motherProfession.classList.add('red', 'lighten-3');
        motherProfession.focus();
        M.toast({ html: "Invalid father profession", classes: 'red darken-3' });
        return false;
    } else if (guardianName.value && guardianName.value.length === 0) {
        guardianName.classList.add('red', 'lighten-3');
        guardianName.focus();
        M.toast({ html: "Invalid Guardian Name", classes: 'red darken-3' });
        return false;
    } else if (guardianName.value && (isNaN(guardianContactNo.value) ||
        guardianContactNo.value.length !== 10 ||
        guardianContactNo.value.charAt(0) !== '9')) {
        guardianContactNo.classList.add('red', 'lighten-3');
        guardianContactNo.focus();
        M.toast({ html: "Guardian contact number must be a 10 digit mobile number starting with 9", classes: 'red darken-3' });
        return false;
    } else if (guardianName.value && (guardianPhoneNo.value && (isNaN(guardianPhoneNo.value) ||
        guardianPhoneNo.value.length !== 9 ||
        guardianPhoneNo.value.charAt(0) !== '0'))) {
        guardianPhoneNo.classList.add('red', 'lighten-3');
        guardianPhoneNo.focus();
        M.toast({ html: "Guardian Phone number Must be a landline number starting with 0", classes: 'red darken-3' });
        return false;
    } else if (guardianName.value && guardianProfession.value.length < 2) {
        guardianProfession.classList.add('red', 'lighten-3');
        guardianProfession.focus();
        M.toast({ html: "Invalid Guardian Profession", classes: 'red darken-3' });
        return false;
    } else if (program.selectedIndex === 0) {
        M.toast({ html: "Select a proper program", classes: 'red darken-3' });
        return false;
    } else if (yearEnrolled.selectedIndex === 0) {
        M.toast({ html: "Select a proper year enrolled", classes: 'red darken-3' });
        return false;
    } else if (currentyear.selectedIndex === 0) {
        M.toast({ html: "Select Your current year", classes: 'red darken-3' });
        return false;
    } else if (currentSemester.selectedIndex === 0) {
        M.toast({ html: "Select your current semester", classes: 'red darken-3' });
    } else if (level.selectedIndex === 0) {
        M.toast({ html: "Select a proper level", classes: 'red darken-3' });
        return false;
    } else if (faculty.selectedIndex === 0) {
        M.toast({ html: "Select a proper faculty", classes: 'red darken-3' });
        return false;
    } else if (section.selectedIndex === 0) {
        M.toast({ html: "Select a proper section", classes: 'red darken-3' });
        return false;
    } else {
        return true;
    }
}

function trimTextInputs() {
    document.querySelector('#studentID').value = document.querySelector('#studentID').value.trim().toUpperCase();
    document.querySelector('#fname').value = document.querySelector('#fname').value.trim();
    document.querySelector('#lname').value = document.querySelector('#lname').value.trim();
    document.querySelector('#mname').value = document.querySelector('#mname').value.trim();
    document.querySelector('#address').value = document.querySelector('#address').value.trim();
    document.querySelector('#email').value = document.querySelector('#email').value.trim();
    document.querySelector('#fathername').value = document.querySelector('#fathername').value.trim();
    document.querySelector('#mothername').value = document.querySelector('#mothername').value.trim();
    document.querySelector('#fathercontact').value = document.querySelector('#fathercontact').value.trim();
    document.querySelector('#mothercontact').value = document.querySelector('#mothercontact').value.trim();
    document.querySelector('#pob').value = document.querySelector('#pob').value.trim();
    document.querySelector('#nationality').value = document.querySelector('#nationality').value.trim();
    document.querySelector('#blockNo').value = document.querySelector('#blockNo').value.trim();
    document.querySelector('#perWardNo').value = document.querySelector('#perWardNo').value.trim();
    document.querySelector('#perMunVDC').value = document.querySelector('#perMunVDC').value.trim();
    document.querySelector('#perDistrict').value = document.querySelector('#perDistrict').value.trim();
    document.querySelector('#perProvince').value = document.querySelector('#perProvince').value.trim();
    document.querySelector('#perZone').value = document.querySelector('#perZone').value.trim();
    document.querySelector('#phoneOrCell').value = document.querySelector('#phoneOrCell').value.trim();
    document.querySelector('#tempBlockNo').value = document.querySelector('#tempBlockNo').value.trim();
    document.querySelector('#tempWardNo').value = document.querySelector('#tempWardNo').value.trim();
    document.querySelector('#tempMunVDC').value = document.querySelector('#tempMunVDC').value.trim();
    document.querySelector('#tempDistrict').value = document.querySelector('#tempDistrict').value.trim();
    document.querySelector('#tempZone').value = document.querySelector('#tempZone').value.trim();
    document.querySelector('#tempProvince').value = document.querySelector('#tempProvince').value.trim();
    document.querySelector('#perMunVDC').value = document.querySelector('#perMunVDC').value.trim();
    document.querySelector('#tempPhoneCell').value = document.querySelector('#tempPhoneCell').value.trim();
    document.querySelector('#tempStudentEmail').value = document.querySelector('#tempStudentEmail').value.trim();
    document.querySelector('#tempAddress').value = document.querySelector('#tempAddress').value.trim();
    document.querySelector('#guardianName').value = document.querySelector('#guardianName').value.trim();
    document.querySelector('#guardianContactNo').value = document.querySelector('#guardianContactNo').value.trim();
    document.querySelector('#guardianPhoneNo').value = document.querySelector('#guardianPhoneNo').value.trim();
    document.querySelector('#guardianProfession').value = document.querySelector('#guardianProfession').value.trim();
    document.querySelector('#fatherProfession').value = document.querySelector('#fatherProfession').value.trim();
    document.querySelector('#motherProfession').value = document.querySelector('#motherProfession').value.trim();
    document.querySelector('#otherCaste').value = document.querySelector('#otherCaste').value.trim();
}

function handleFormSubmit(e) {
    e.preventDefault();
    trimTextInputs();
    if (validateTextInputs()) {
        // submit the form at here after omitting codes below
        M.toast({ html: 'Congratulations!! Form Submitted', classes: 'teal' });
    }

}

function handleCasteChange() {
    if (this.value === 'Other') {
        document.querySelector('#otherCasteParent').classList.remove('hidden');
    } else {
        document.querySelector('#otherCasteParent').classList.add('hidden');
        document.querySelector('#otherCaste').value = '';
    }
}

function handleCollegeEmail() {
    document.querySelector('#tempStudentEmail').value = `${this.value}@sxc.edu.np`.toUpperCase();
}


function copyPerToTemp() {
    const temporaries = document.querySelectorAll('.temporaries');

    if (document.querySelector('#tempSameAsPer').checked) {
        // disable all temporary inputs inputs
        temporaries.forEach(temporary => {
            temporary.setAttribute('disabled', 'true');
        });
        // copy from permanent to temporary
        document.querySelector('#tempBlockNo').value = document.querySelector('#blockNo').value;
        document.querySelector('#tempWardNo').value = document.querySelector('#perWardNo').value;
        document.querySelector('#tempMunVDC').value = document.querySelector('#perMunVDC').value;
        document.querySelector('#tempDistrict').value = document.querySelector('#perDistrict').value;
        document.querySelector('#tempZone').value = document.querySelector('#perZone').value;
        document.querySelector('#tempProvince').value = document.querySelector('#perProvince').value;
        document.querySelector('#tempPhoneCell').value = document.querySelector('#phoneOrCell').value;
        document.querySelector('#tempAddress').focus();
    } else {
        // Undo the disabling
        temporaries.forEach(temporary => {
            temporary.removeAttribute('disabled');
            temporary.focus();
            temporary.blur();
        });

    }

}

function initializeYearSelectionOption() {
    const currentYear = new Date().getFullYear();
    const ddElement = M.FormSelect.getInstance(document.querySelector('#yearEnrolled'));
    for (let i = currentYear; i >= 1988; i--) {
        let yearOption = document.createElement('option');
        yearOption.setAttribute('value', i);
        let yearText = document.createTextNode(i);
        yearOption.appendChild(yearText);
        ddElement.$el[0].appendChild(yearOption);
    }
    // reinitialize
    M.FormSelect.init(document.querySelector('#yearEnrolled'));
}

function handleProgramChange() {
    const facultyElement = M.FormSelect.getInstance(document.querySelector('#faculty'));
    if (this.value === 'A Level') {
        let option1 = document.createElement('option');
        let option2 = document.createElement('option');
        option1.setAttribute('value', 'Cambridge Science');
        option2.setAttribute('value', 'Cambridge Non-Science');
        option1.appendChild(document.createTextNode('Cambridge Science'));
        option2.appendChild(document.createTextNode('Cambridge Non-Science'));
        facultyElement.$el[0].appendChild(option1);
        facultyElement.$el[0].appendChild(option2);
        // reinitialize
        M.FormSelect.init(document.querySelector('#faculty'));
    } else {
        // TODO Remove a level components
        const elementsToRemove = []
        facultyElement.$el[0].childNodes.forEach(node => {
            if (node.value && (node.value === 'Cambridge Science' || node.value === 'Cambridge Non-Science')) {
                elementsToRemove.push(node);
            }
        });
        elementsToRemove.forEach(node => {
            facultyElement.$el[0].removeChild(node);
        });
        // reinitialize
        M.FormSelect.init(document.querySelector('#faculty'));
    }
}

function initializeOtherComponents() {
    document.querySelector('#registration').addEventListener('submit', handleFormSubmit);
    document.querySelector('#caste').addEventListener('change', handleCasteChange);
    document.querySelector('#program').addEventListener('change', handleProgramChange);
    document.querySelector('#studentID').addEventListener('keyup', handleCollegeEmail);
    document.querySelector('#tempSameAsPer').addEventListener('click', copyPerToTemp);
    initializeYearSelectionOption();

    const perAddresses = document.querySelectorAll('.copyToTemp');
    perAddresses.forEach(perAddress => perAddress.addEventListener('change', copyPerToTemp));
}

function initializeMaterializeComponents() {
    const dropDowns = document.querySelectorAll('select');
    const nationalityAutoComplete = document.querySelector('#nationality');
    const districtsAutocomplete = document.querySelectorAll('.districts');
    const zonesAutocomplete = document.querySelectorAll('.zones');
    const provincesAutocomplete = document.querySelectorAll('.provinces');
    M.FormSelect.init(dropDowns, '');
    M.Autocomplete.init(nationalityAutoComplete, { data: nationalities });
    M.Autocomplete.init(districtsAutocomplete, { data: districts });
    M.Autocomplete.init(zonesAutocomplete, { data: zones });
    M.Autocomplete.init(provincesAutocomplete, { data: provinces });

}

// Autocomplete constants sections

const provinces = {
    Province1: null,
    Province2: null,
    Bagmati: null,
    Gandaki: null,
    Province5: null,
    Karnali: null,
    Sudurpaschim: null
}

const zones = {
    Mechi: null,
    Koshi: null,
    Sagarmatha: null,
    Janakpur: null,
    Bagmati: null,
    Narayani: null,
    Gandaki: null,
    Lumbini: null,
    Dhawalagiri: null,
    Rapti: null,
    Karnali: null,
    Bheri: null,
    Seti: null,
    Mahakali: null
}

const districts = {
    Achham: null,
    Arghakhanchi: null,
    Baglung: null,
    Baitadi: null,
    Bajhang: null,
    Bajura: null,
    Banke: null,
    Bara: null,
    Bardiya: null,
    Bhaktapur: null,
    Bhojpur: null,
    Chitwan: null,
    Dadeldhura: null,
    Dailekh: null,
    DangDeokhuri: null,
    Darchula: null,
    Dhading: null,
    Dhankuta: null,
    Dhanusa: null,
    Dolakha: null,
    Dolpa: null,
    Doti: null,
    EasternRukum: null,
    Gorkha: null,
    Gulmi: null,
    Humla: null,
    Ilam: null,
    Jajarkot: null,
    Jhapa: null,
    Jumla: null,
    Kailali: null,
    Kalikot: null,
    Kanchanpur: null,
    Kapilvastu: null,
    Kaski: null,
    Kathmandu: null,
    Kavrepalanchok: null,
    Khotang: null,
    Lalitpur: null,
    Lamjung: null,
    Mahottari: null,
    Makwanpur: null,
    Manang: null,
    Morang: null,
    Mugu: null,
    Mustang: null,
    Myagdi: null,
    Nawalpur: null,
    Nuwakot: null,
    Okhaldhunga: null,
    Palpa: null,
    Panchthar: null,
    Parasi: null,
    Parbat: null,
    Parsa: null,
    Pyuthan: null,
    Ramechhap: null,
    Rasuwa: null,
    Rautahat: null,
    Rolpa: null,
    Rupandehi: null,
    Salyan: null,
    Sankhuwasabha: null,
    Saptari: null,
    Sarlahi: null,
    Sindhuli: null,
    Sindhupalchok: null,
    Siraha: null,
    Solukhumbu: null,
    Sunsari: null,
    Surkhet: null,
    Syangja: null,
    Tanahu: null,
    Taplejung: null,
    Terhathum: null,
    Udayapur: null,
    WesternRukum: null,

}


const nationalities = {
    Afghanistan: null,
    Albania: null,
    Algeria: null,
    Andorra: null,
    Angola: null,
    AntiguaANDDeps: null,
    Argentina: null,
    Armenia: null,
    Australia: null,
    Austria: null,
    Azerbaijan: null,
    Bahamas: null,
    Bahrain: null,
    Bangladesh: null,
    Barbados: null,
    Belarus: null,
    Belgium: null,
    Belize: null,
    Benin: null,
    Bhutan: null,
    Bolivia: null,
    BosniaHerzegovina: null,
    Botswana: null,
    Brazil: null,
    Brunei: null,
    Bulgaria: null,
    Burkina: null,
    Burundi: null,
    Cambodia: null,
    Cameroon: null,
    Canada: null,
    CapeVerde: null,
    CentralAfricanRep: null,
    Chad: null,
    Chile: null,
    China: null,
    Colombia: null,
    Comoros: null,
    Congo: null,
    Congo: null,
    CostaRica: null,
    Croatia: null,
    Cuba: null,
    Cyprus: null,
    CzechRepublic: null,
    Denmark: null,
    Djibouti: null,
    Dominica: null,
    DominicanRepublic: null,
    EastTimor: null,
    Ecuador: null,
    Egypt: null,
    ElSalvador: null,
    EquatorialGuinea: null,
    Eritrea: null,
    Estonia: null,
    Ethiopia: null,
    Fiji: null,
    Finland: null,
    France: null,
    Gabon: null,
    Gambia: null,
    Georgia: null,
    Germany: null,
    Ghana: null,
    Greece: null,
    Grenada: null,
    Guatemala: null,
    Guinea: null,
    GuineaBissau: null,
    Guyana: null,
    Haiti: null,
    Honduras: null,
    Hungary: null,
    Iceland: null,
    India: null,
    Indonesia: null,
    Iran: null,
    Iraq: null,
    Ireland: null,
    Israel: null,
    Italy: null,
    IvoryCoast: null,
    Jamaica: null,
    Japan: null,
    Jordan: null,
    Kazakhstan: null,
    Kenya: null,
    Kiribati: null,
    KoreaNorth: null,
    KoreaSouth: null,
    Kosovo: null,
    Kuwait: null,
    Kyrgyzstan: null,
    Laos: null,
    Latvia: null,
    Lebanon: null,
    Lesotho: null,
    Liberia: null,
    Libya: null,
    Liechtenstein: null,
    Lithuania: null,
    Luxembourg: null,
    Macedonia: null,
    Madagascar: null,
    Malawi: null,
    Malaysia: null,
    Maldives: null,
    Mali: null,
    Malta: null,
    MarshallIslands: null,
    Mauritania: null,
    Mauritius: null,
    Mexico: null,
    Micronesia: null,
    Moldova: null,
    Monaco: null,
    Mongolia: null,
    Montenegro: null,
    Morocco: null,
    Mozambique: null,
    MyanmarBurma: null,
    Namibia: null,
    Nauru: null,
    Nepal: null,
    Netherlands: null,
    NewZealand: null,
    Nicaragua: null,
    Niger: null,
    Nigeria: null,
    Norway: null,
    Oman: null,
    Pakistan: null,
    Palau: null,
    Panama: null,
    PapuaNewGuinea: null,
    Paraguay: null,
    Peru: null,
    Philippines: null,
    Poland: null,
    Portugal: null,
    Qatar: null,
    Romania: null,
    RussianFederation: null,
    Rwanda: null,
    StKittsAndNevis: null,
    StLucia: null,
    SaintVincentAndTheGrenadines: null,
    Samoa: null,
    SanMarino: null,
    SaoTomeAndPrincipe: null,
    SaudiArabia: null,
    Senegal: null,
    Serbia: null,
    Seychelles: null,
    SierraLeone: null,
    Singapore: null,
    Slovakia: null,
    Slovenia: null,
    SolomonIslands: null,
    Somalia: null,
    SouthAfrica: null,
    SouthSudan: null,
    Spain: null,
    SriLanka: null,
    Sudan: null,
    Suriname: null,
    Swaziland: null,
    Sweden: null,
    Switzerland: null,
    Syria: null,
    Taiwan: null,
    Tajikistan: null,
    Tanzania: null,
    Thailand: null,
    Togo: null,
    Tonga: null,
    TrinidadAndTobago: null,
    Tunisia: null,
    Turkey: null,
    Turkmenistan: null,
    Tuvalu: null,
    Uganda: null,
    Ukraine: null,
    UnitedArabEmirates: null,
    UnitedKingdom: null,
    UnitedStates: null,
    Uruguay: null,
    Uzbekistan: null,
    Vanuatu: null,
    VaticanCity: null,
    Venezuela: null,
    Vietnam: null,
    Yemen: null,
    Zambia: null,
    Zimbabwe: null

}