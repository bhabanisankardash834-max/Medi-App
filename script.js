/***********************
 * DATA: Hospitals (Odisha)
 ***********************/
const HOSPITALS = {
  AAYUSHI_BBSR: "Aayushi Hospital, Bhubaneswar",
  ADITYA_BBSR: "Aditya Care Hospital, Bhubaneswar",
  AHH_CUTTACK: "Acharya Harihar Post Graduate Institute of Cancer, Cuttack",
  AIIMS_BBSR: "AIIMS Bhubaneswar, Odisha",
  AMRI_BBSR: "AMRI Hospitals, Bhubaneswar",
  APEX_BBSR: "Apex Hospital, Bhubaneswar",
  APOLLO_BBSR: "Apollo Hospitals, Bhubaneswar",
  ASHWINI_CTK: "Ashwini Hospital, Cuttack",
  ASTHA_BBSR: "Astha Hospital, Bhubaneswar",
  BANSAL_RKL: "Bansal Hospital, Rourkela",
  BISWAL_CTK: "Biswal Hospital, Cuttack",
  BLUEWHEEL_BBSR: "Blue Wheel Hospital, Bhubaneswar",
  CAPITAL_BBSR: "Capital Hospital, Bhubaneswar",
  CARE_BBSR: "Care Hospitals, Bhubaneswar",
  CARE_CTK: "Care & Cure Hospital, Cuttack",
  DHH_ANGUL: "District Headquarters Hospital, Angul",
  DHH_BALASORE: "District Headquarters Hospital, Balasore",
  DHH_BARIPADA: "Pandit Raghunath Murmu Medical College & Hospital, Baripada",
  DHH_PURI: "District Headquarters Hospital, Puri",
  DIST_HOSP_BARGARH: "District Headquarters Hospital, Bargarh",
  DIST_HOSP_BOUDH: "District Headquarters Hospital, Boudh",
  DIST_HOSP_DEOGARH: "District Headquarters Hospital, Deogarh",
  DIST_HOSP_DHENKANAL: "District Headquarters Hospital, Dhenkanal",
  DIST_HOSP_GANJAM: "District Headquarters Hospital, Ganjam (Chhatrapur)",
  DIST_HOSP_JAGATSINGHPUR: "District Headquarters Hospital, Jagatsinghpur",
  DIST_HOSP_JHARSUGUDA: "District Headquarters Hospital, Jharsuguda",
  DIST_HOSP_KALAHANDI: "District Headquarters Hospital, Kalahandi (Bhawanipatna)",
  DIST_HOSP_KANDHAMAL: "District Headquarters Hospital, Kandhamal (Phulbani)",
  DIST_HOSP_KEONJHAR: "District Headquarters Hospital, Keonjhar",
  DIST_HOSP_MALKANGIRI: "District Headquarters Hospital, Malkangiri",
  DIST_HOSP_NABARANGPUR: "District Headquarters Hospital, Nabarangpur",
  DIST_HOSP_NUAPADA: "District Headquarters Hospital, Nuapada",
  DIST_HOSP_RAYAGADA: "District Headquarters Hospital, Rayagada",
  DIST_HOSP_SONEPUR: "District Headquarters Hospital, Sonepur",
  DURGA_BALASORE: "Durga Hospital, Balasore",
  ESIC_RKL: "ESI Hospital, Rourkela",
  GAYATRI_SAMBALPUR: "Gayatri Hospital, Sambalpur",
  HAPPY_BBSR: "Happy Women & Child Hospital, Bhubaneswar",
  HI_TECH_RKL: "Hi-Tech Medical & Research Hospital, Rourkela",
  HITECH_BBSR: "Hi-Tech Medical College & Hospital, Bhubaneswar",
  HOLY_BBSR: "Holy Spirit Hospital, Bhubaneswar",
  IGH_ROURK: "Ispat General Hospital (New RSP Hospital), Rourkela",
  JAGANNATH_PURI: "Jagannath Hospital, Puri",
  KALINGA_BBSR: "Kalinga Hospital, Bhubaneswar",
  KIMS_BBSR: "KIMS Hospital, Bhubaneswar",
  LIFELINE_BBSR: "Lifeline Hospital, Bhubaneswar",
  MAA_MANGALA_PURI: "Maa Mangala Hospital, Puri",
  MAA_SHANTI_ANGUL: "Maa Shanti Memorial Hospital, Angul",
  MEDIHOPE_BBSR: "MediHope Hospital, Bhubaneswar",
  MKCG_BERH: "MKCG Medical College, Berhampur",
  NARAYANA_BBSR: "Narayana Hospital, Bhubaneswar",
  NEELACHAL_BBSR: "Neelachal Hospital, Bhubaneswar",
  OM_SAI_BALASORE: "Om Sai Hospital, Balasore",
  PRACHI_BBSR: "Prachi Hospital, Bhubaneswar",
  PRM_MED_BARIPADA: "Pandit Raghunath Murmu Medical College, Baripada",
  PULSE_BBSR: "Pulse Hospital, Bhubaneswar",
  RAMESH_RAYAGADA: "Ramesh Hospital, Rayagada",
  RUCHI_RKL: "Ruchi Hospital, Rourkela",
  SADGURU_BBSR: "Sadguru Hospital, Bhubaneswar",
  SAHARA_BBSR: "Sahara Hospital, Bhubaneswar",
  SAHID_BBSR: "Sahid Nagar Clinic & Hospital, Bhubaneswar",
  SANJEEVANI_JHARSUGUDA: "Sanjeevani Hospital, Jharsuguda",
  SCB_CUTTACK : "SCB Medical College, Cuttack",
  SEVENHILLS_CTK: "Seven Hills Hospital, Cuttack",
  SHANTI_CTK: "Shanti Memorial Hospital, Cuttack",
  SHREE_BBSR: "Shree Hospital, Bhubaneswar",
  SHREEJAGANNATH_RKL: "Shree Jagannath Hospital, Rourkela",
  SLNMC_KORAPUT: "SLN Medical College, Koraput",
  SUM_BBSR: "SUM Ultimate Medicare / IMS & SUM Hospital, Bhubaneswar",
  SUN_HOSP_BBSR: "Sun Hospital, Bhubaneswar",
  TRINATH_BBSR: "Trinath Hospital, Bhubaneswar",
  UJJWAL_BBSR: "Ujjwal Hospital, Bhubaneswar",
  USTHI_BBSR: "Usthi Hospital, Bhubaneswar",
  VEDANTA_BBSR: "Vedanta Hospital, Bhubaneswar",
  VEDANTA_JHARSUGUDA: "Vedanta Hospital, Jharsuguda",
  VIMSAR_BURLA: "VIMSAR, Burla (Sambalpur)",
};

/****************************************
 * DATA: Diseases (A–Z) with cure+hospital
 * (Large list; you can extend further)
 ****************************************/
const DISEASES = [
  // A
  { name: "Acne", cure: "Topical retinoids/benzoyl peroxide; antibiotics for moderate cases.", hospital: HOSPITALS.SUM_BBSR },
  { name: "Acute Appendicitis", cure: "Emergency surgery (appendectomy).", hospital: HOSPITALS.AIIMS_BBSR },
  { name: "Acute Gastroenteritis", cure: "Rehydration, antiemetics, electrolytes; antibiotics only if indicated.", hospital: HOSPITALS.CAPITAL_BBSR },
  { name: "Allergic Rhinitis", cure: "Antihistamines, intranasal steroids; avoid triggers.", hospital: HOSPITALS.SUM_BBSR },
  { name: "Anemia (Iron Deficiency)", cure: "Iron supplementation, treat cause.", hospital: HOSPITALS.MKCG_BERH },
  { name: "Anxiety Disorder", cure: "CBT, SSRIs/SNRIs, lifestyle and sleep hygiene.", hospital: HOSPITALS.AIIMS_BBSR },
  { name: "Asthma", cure: "Inhaled bronchodilators & steroids; trigger control.", hospital: HOSPITALS.KIMS_BBSR },


  // B
  { name: "Back Pain (Mechanical)", cure: "Physiotherapy, NSAIDs, posture/ergonomics.", hospital: HOSPITALS.CARE_BBSR },
  { name: "Bacterial Vaginosis", cure: "Metronidazole or clindamycin as prescribed.", hospital: HOSPITALS.CAPITAL_BBSR },
  { name: "Bronchitis (Acute)", cure: "Rest, fluids; bronchodilators if wheezy; antibiotics rarely.", hospital: HOSPITALS.SUM_BBSR },

  // C
  { name: "Cancer (General)", cure: "Depends on type/stage; surgery/chemo/radiation.", hospital: HOSPITALS.AHH_CUTTACK },
  { name: "Celiac Disease", cure: "Strict gluten-free diet.", hospital: HOSPITALS.KIMS_BBSR },
  { name: "Chickenpox (Varicella)", cure: "Supportive care; acyclovir if early/high-risk.", hospital: HOSPITALS.CAPITAL_BBSR },
  { name: "Chikungunya", cure: "Supportive care; pain control; hydration.", hospital: HOSPITALS.MKCG_BERH },
  { name: "Chlamydia", cure: "Antibiotics (per protocol); treat partners.", hospital: HOSPITALS.AIIMS_BBSR },
  { name: "Cholera", cure: "Aggressive rehydration, antibiotics as indicated.", hospital: HOSPITALS.DHH_BALASORE },
  { name: "Chronic Kidney Disease", cure: "BP control, diabetes control; dialysis/transplant when indicated.", hospital: HOSPITALS.KIMS_BBSR },
  { name: "COPD", cure: "Bronchodilators, inhaled steroids, smoking cessation.", hospital: HOSPITALS.SCB_CUTTACK },
  { name: "COVID-19", cure: "Supportive care; oxygen/antivirals if indicated.", hospital: HOSPITALS.AIIMS_BBSR },

  // D
  { name: "Dandruff (Seborrheic Dermatitis)", cure: "Antifungal shampoos; topical steroids for flares.", hospital: HOSPITALS.SUM_BBSR },
  { name: "Dengue", cure: "Fluids, monitoring platelets; avoid NSAIDs; hospitalize if warning signs.", hospital: HOSPITALS.CAPITAL_BBSR },
  { name: "Depression (Major)", cure: "Psychotherapy + antidepressants; safety planning.", hospital: HOSPITALS.AIIMS_BBSR },
  { name: "Dermatitis (Allergic/Contact)", cure: "Trigger avoidance; topical steroids; emollients.", hospital: HOSPITALS.SUM_BBSR },
  { name: "Diabetes Mellitus (Type 2)", cure: "Diet, exercise, metformin; add agents/insulin as needed.", hospital: HOSPITALS.AIIMS_BBSR },
  { name: "Diarrhea (Infectious)", cure: "ORS; consider stool tests; antibiotics only if indicated.", hospital: HOSPITALS.CAPITAL_BBSR },

  // E
  { name: "Eczema (Atopic Dermatitis)", cure: "Emollients; topical steroids; trigger control.", hospital: HOSPITALS.SUM_BBSR },
  { name: "Endometriosis", cure: "Hormonal therapy; laparoscopy for diagnosis/treatment.", hospital: HOSPITALS.KIMS_BBSR },
  { name: "Epilepsy", cure: "Anti-seizure medications; neurology follow-up.", hospital: HOSPITALS.SCB_CUTTACK },

  // F
  { name: "Fatty Liver (NAFLD)", cure: "Weight loss, diet, exercise; manage comorbidities.", hospital: HOSPITALS.KIMS_BBSR },
  { name: "Food Poisoning", cure: "Rehydration; antiemetics; avoid antimotility in severe dysentery.", hospital: HOSPITALS.CAPITAL_BBSR },

  // G
  { name: "Gallstones", cure: "Diet changes; cholecystectomy if symptomatic.", hospital: HOSPITALS.AIIMS_BBSR },
  { name: "Gastritis", cure: "PPI, avoid irritants, check H. pylori.", hospital: HOSPITALS.CARE_BBSR },
  { name: "GERD (Acid Reflux)", cure: "Lifestyle + PPI; weight loss; elevate head of bed.", hospital: HOSPITALS.SUM_BBSR },
  { name: "Gonorrhea", cure: "Antibiotics (per protocol); treat partners.", hospital: HOSPITALS.AIIMS_BBSR },

  // H
  { name: "Headache (Migraine)", cure: "Triptans/NSAIDs; preventive therapy for frequent attacks.", hospital: HOSPITALS.SCB_CUTTACK },
  { name: "Heart Attack (Myocardial Infarction)", cure: "Emergency PCI/thrombolysis; call emergency services.", hospital: HOSPITALS.CARE_BBSR },
  { name: "Heart Failure", cure: "Diuretics, ACEi/ARB/ARNI, beta-blockers; salt restriction.", hospital: HOSPITALS.CARE_BBSR },
  { name: "Hepatitis A", cure: "Supportive care; hydration; rest.", hospital: HOSPITALS.MKCG_BERH },
  { name: "Hepatitis B", cure: "Antiviral therapy depending on stage; monitoring.", hospital: HOSPITALS.KIMS_BBSR },
  { name: "Hepatitis C", cure: "DAA therapy (direct-acting antivirals).", hospital: HOSPITALS.KIMS_BBSR },
  { name: "Herpes Zoster (Shingles)", cure: "Antivirals + pain control; early treatment best.", hospital: HOSPITALS.CAPITAL_BBSR },
  { name: "Hyperthyroidism", cure: "Antithyroid meds; beta-blockers; consider RAI/surgery.", hospital: HOSPITALS.SUM_BBSR },
  { name: "Hypothyroidism", cure: "Levothyroxine; periodic TSH monitoring.", hospital: HOSPITALS.SUM_BBSR },
  { name: "Hypertension", cure: "Lifestyle + antihypertensives; salt restriction.", hospital: HOSPITALS.SCB_CUTTACK },

  // I
  { name: "IBD (Crohn’s/Ulcerative Colitis)", cure: "5-ASA, steroids, immunomodulators/biologics.", hospital: HOSPITALS.KIMS_BBSR },
  { name: "IBS", cure: "Diet (low FODMAP), stress control, antispasmodics.", hospital: HOSPITALS.CAPITAL_BBSR },
  { name: "Influenza", cure: "Supportive care; antivirals in high-risk/early.", hospital: HOSPITALS.MKCG_BERH },
  { name: "Insomnia", cure: "Sleep hygiene; CBT-I; short-term meds if needed.", hospital: HOSPITALS.AIIMS_BBSR },

  // J
  { name: "Jaundice", cure: "Treat cause (viral hepatitis, obstruction, hemolysis).", hospital: HOSPITALS.KIMS_BBSR },

  // K
  { name: "Kidney Stones", cure: "Fluids, analgesia; tamsulosin; lithotripsy if needed.", hospital: HOSPITALS.KIMS_BBSR },

  // L
  { name: "Low Back Strain", cure: "Rest, NSAIDs, physio; red-flag check.", hospital: HOSPITALS.CARE_BBSR },

  // M
  { name: "Malaria", cure: "Antimalarials per protocol; monitor for severe malaria.", hospital: HOSPITALS.MKCG_BERH },
  { name: "Measles", cure: "Supportive care; vitamin A; notify public health.", hospital: HOSPITALS.DHH_BALASORE },
  { name: "Migraine", cure: "Abortive + preventive therapy; trigger management.", hospital: HOSPITALS.SCB_CUTTACK },
  { name: "Mumps", cure: "Supportive care; complications monitoring.", hospital: HOSPITALS.DHH_PURI },

  // N
  { name: "Nephrotic Syndrome", cure: "Steroids and specific therapy; salt restriction.", hospital: HOSPITALS.SCB_CUTTACK },
  { name: "Nonalcoholic Steatohepatitis (NASH)", cure: "Weight loss; manage metabolic syndrome.", hospital: HOSPITALS.KIMS_BBSR },

  // O
  { name: "Osteoarthritis (Knee)", cure: "Physio, weight loss, NSAIDs; injections; surgery if severe.", hospital: HOSPITALS.CARE_BBSR },
  { name: "Otitis Media (Ear Infection)", cure: "Analgesia; antibiotics if indicated.", hospital: HOSPITALS.CAPITAL_BBSR },

  // P
  { name: "Pancreatitis (Acute)", cure: "Hospitalization; fluids; pain control; treat cause.", hospital: HOSPITALS.AIIMS_BBSR },
  { name: "PCOS", cure: "Lifestyle; metformin; hormonal therapy.", hospital: HOSPITALS.KIMS_BBSR },
  { name: "Peptic Ulcer Disease", cure: "PPI; H. pylori eradication; avoid NSAIDs.", hospital: HOSPITALS.SUM_BBSR },
  { name: "Piles (Hemorrhoids)", cure: "Fiber, fluids, stool softener; procedures if severe.", hospital: HOSPITALS.CARE_BBSR },
  { name: "Pneumonia", cure: "Antibiotics as per severity; supportive care.", hospital: HOSPITALS.SCB_CUTTACK },
  { name: "Psoriasis", cure: "Topicals, phototherapy, systemic/biologics for severe.", hospital: HOSPITALS.SUM_BBSR },

  // Q
  { name: "Quinsy (Peritonsillar Abscess)", cure: "Drainage + antibiotics; urgent ENT review.", hospital: HOSPITALS.AIIMS_BBSR },

  // R
  { name: "Rabies Exposure (Post-bite)", cure: "Immediate wound wash; vaccine + RIG per protocol.", hospital: HOSPITALS.CAPITAL_BBSR },
  { name: "Renal Colic", cure: "Analgesia; tamsulosin; urology if obstructed/infected.", hospital: HOSPITALS.KIMS_BBSR },
  { name: "Ringworm (Tinea)", cure: "Topical/oral antifungals.", hospital: HOSPITALS.SUM_BBSR },

  // S
  { name: "Stomach Pain ", cure: "Drink plenty of clear fluids such as water. Reduce your intake of coffee, tea and alcohol as these can make the pain worse.", hospital: HOSPITALS.CARE_BBSR },
  { name: "Scabies", cure: "Permethrin cream; treat contacts; decontaminate linen.", hospital: HOSPITALS.DHH_ANGUL },
  { name: "Sinusitis (Acute)", cure: "Decongestants, saline; antibiotics if bacterial.", hospital: HOSPITALS.CAPITAL_BBSR },
  { name: "Snakebite (Poisoning)", cure: "Emergency antivenom based on species; airway/ventilation.", hospital: HOSPITALS.MKCG_BERH },
  { name: "Stroke (CVA)", cure: "Emergency thrombolysis/thrombectomy window dependent.", hospital: HOSPITALS.SCB_CUTTACK },
  { name: "Syphilis", cure: "Penicillin as per stage; treat partners; follow-up VDRL.", hospital: HOSPITALS.AIIMS_BBSR },

  // T
  { name: "Tetanus", cure: "Wound care; TIG + vaccination; ICU if severe.", hospital: HOSPITALS.MKCG_BERH },
  { name: "Thyroiditis (Subacute)", cure: "NSAIDs/steroids; beta-blockers for symptoms.", hospital: HOSPITALS.SUM_BBSR },
  { name: "Tonsillitis", cure: "Analgesia; antibiotics if bacterial (Centor).", hospital: HOSPITALS.CAPITAL_BBSR },
  { name: "Tuberculosis (Pulmonary)", cure: "DOTS/ATT regimen per national program.", hospital: HOSPITALS.AIIMS_BBSR },
  { name: "Typhoid (Enteric Fever)", cure: "Antibiotics as per sensitivity; hydration.", hospital: HOSPITALS.DHH_BARIPADA },

  // U
  { name: "URTI (Common Cold)", cure: "Supportive care; fluids; rest.", hospital: HOSPITALS.CAPITAL_BBSR },
  { name: "UTI (Urinary Tract Infection)", cure: "Urine test + antibiotics; hydration.", hospital: HOSPITALS.KIMS_BBSR },

  // V
  { name: "Varicose Veins", cure: "Compression; sclerotherapy/ablation/surgery.", hospital: HOSPITALS.CARE_BBSR },
  { name: "Vertigo (BPPV)", cure: "Epley maneuver; vestibular therapy.", hospital: HOSPITALS.SCB_CUTTACK },
  { name: "Viral Fever (Non-specific)", cure: "Rest, hydration, antipyretics; watch red flags.", hospital: HOSPITALS.CAPITAL_BBSR },

  // W
  { name: "Whooping Cough (Pertussis)", cure: "Macrolides; isolation; vaccinate contacts.", hospital: HOSPITALS.MKCG_BERH },
  { name: "Worm Infestation", cure: "Albendazole/Mebendazole per protocol.", hospital: HOSPITALS.DHH_PURI },

  // X (rare placeholder)
  { name: "Xerostomia (Dry Mouth)", cure: "Hydration; cause review; saliva substitutes.", hospital: HOSPITALS.SUM_BBSR },

  // Y
  { name: "Yellow Fever (Imported)", cure: "Supportive care; report; vaccination prior to travel.", hospital: HOSPITALS.AIIMS_BBSR },

  // Z
  { name: "Zoster (Shingles)", cure: "Antivirals; pain control; prevent PHN.", hospital: HOSPITALS.CAPITAL_BBSR },
];

/****************************************
 * DATA: Expanded symptom keywords
 * Map<string diseaseLower, string[] keywords>
 ****************************************/
const SYMPTOM_KEYWORDS = {
  "asthma": [
    "wheeze","wheezing","whistling sound","shortness of breath","sob",
    "chest tightness","tight chest","night cough","exercise cough","allergy cough",
    "breathless","difficulty breathing","dust triggers","cold air triggers","inhaler helps"
  ],
  "hypertension": [
    "high bp","bp high","blood pressure high","headache","morning headache",
    "dizziness","blurred vision","nosebleed","chest pain","palpitations"
  ],
  "diabetes mellitus (type 2)": [
    "frequent urination","peeing a lot","increased thirst","always thirsty","dry mouth",
    "hunger","weight loss","fatigue","blurred vision","slow wound healing","tingling feet"
  ],
  "malaria": [
    "high fever","fever spikes","chills","rigors","sweats","headache","nausea","body ache","travel to endemic"
  ],
  "dengue": [
    "high fever","severe headache","pain behind eyes","retro-orbital pain","joint pain","muscle pain",
    "rash","nausea","vomiting","bleeding gums","low platelets","warning signs"
  ],
  "typhoid (enteric fever)": [
    "prolonged fever","step ladder fever","abdominal pain","constipation","diarrhea",
    "headache","weakness","coated tongue","rose spots"
  ],
  "tuberculosis (pulmonary)": [
    "chronic cough","cough more than 2 weeks","weight loss","loss of appetite",
    "night sweats","low fever","blood in sputum","hemoptysis"
  ],
  "pneumonia": [
    "fever","productive cough","green sputum","rusty sputum","chest pain worse on breathing",
    "shortness of breath","rapid breathing","chills"
  ],
  "stroke (cva)": [
    "face droop","arm weakness","speech difficulty","one-sided weakness","numbness",
    "sudden confusion","vision loss","severe headache","balance problems"
  ],
  "heart attack (myocardial infarction)": [
    "chest pressure","crushing chest pain","left arm pain","jaw pain","sweating",
    "shortness of breath","nausea","burning chest not relieved by antacids"
  ],
  "gerd (acid reflux)": [
    "heartburn","acid taste","sour belch","burning chest","worse lying down","after meals","night symptoms"
  ],
  "peptic ulcer disease": [
    "epigastric pain","upper abdominal pain","pain after meals","pain relieved by food",
    "black stools","melena","nausea","bloating"
  ],
  "migraine": [
    "one sided headache","throbbing headache","nausea","vomiting","sensitivity to light","photophobia","aura","visual aura"
  ],
  "urti (common cold)": [
    "runny nose","sneezing","sore throat","mild fever","nasal congestion","watery eyes","cough"
  ],
  "covid-19": [
    "fever","dry cough","loss of smell","loss of taste","tiredness","sore throat","body ache","breathlessness"
  ],
  "uti (urinary tract infection)": [
    "burning urination","painful urination","dysuria","frequent urination","urgency","lower abdominal pain","foul smell urine","fever with chills"
  ],
  "kidney stones": [
    "severe side pain","flank pain","pain to groin","blood in urine","nausea","vomiting","restless due to pain"
  ],
  "anemia (iron deficiency)": [
    "tiredness","pale skin","breathlessness on exertion","dizziness","brittle nails","pica","palpitations"
  ],
  "eczema (atopic dermatitis)": [
    "itchy rash","dry skin","red patches","behind knees","inside elbows","worse in winter","allergic history"
  ],
  "psoriasis": [
    "thick scaly plaques","silvery scales","elbows and knees","itchy","nail pitting"
  ],
  "sinusitis (acute)": [
    "facial pain","pressure over cheeks","blocked nose","thick nasal discharge","post nasal drip","worse bending forward"
  ],
  "gallstones": [
    "right upper abdominal pain","after fatty meal","nausea","vomiting","pain to right shoulder","biliary colic"
  ],
  "appendicitis": [
    "pain near navel then right lower abdomen","loss of appetite","nausea","fever","rebound tenderness"
  ],
  "scabies": [
    "intense itching at night","small burrows","web spaces of fingers","wrists","family members itching"
  ],
  "ringworm (tinea)": [
    "circular rash","ring like rash","itchy patch","scaly border","body folds"
  ],
  "epilepsy": [
    "seizure","fits","jerking","loss of consciousness","post-ictal confusion","tongue bite"
  ],
  // fallback keywords: if disease not in this map we’ll try matching by disease name tokens.
};

/****************************************
 * Utility: map/search helpers
 ****************************************/
function gmLink(place){
  const q = encodeURIComponent(`${place}, Odisha`);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}
function normalize(s){ return (s || "").toLowerCase().trim(); }
function tokenize(s){
  return normalize(s)
    .replace(/[^\p{L}\p{N}\s]/gu,' ')
    .split(/\s+/)
    .filter(Boolean);
}
function includesFuzzy(text, keyword){
  // partial match tolerant; checks each keyword token exists in text
  const t = normalize(text);
  return keyword.split(/\s+/).every(tok => t.includes(tok));
}

/****************************************
 * DOM elements
 ****************************************/
const optionSelect = document.getElementById('optionSelect');
const optionContainer = document.getElementById('optionContainer');
const resultDiv = document.getElementById('result');

/****************************************
 * Build Cure View (dropdown + search)
 ****************************************/
function buildCureView(){
  // Sort A–Z
  const sorted = [...DISEASES].sort((a,b)=>a.name.localeCompare(b.name));

  optionContainer.innerHTML = `
    <div class="cure-grid">
      <label class="label-strong" for="diseaseSelect">Select Disease (A–Z):</label>
      <select id="diseaseSelect" aria-label="Disease list">
        <option value="">-- Choose Disease --</option>
        ${sorted.map(d=>`<option value="${d.name}">${d.name}</option>`).join('')}
      </select>

      <div class="inline-actions">
        <button id="showBtn" aria-label="Show details for selected disease">Show</button>
      </div>

      <hr />

      <label class="label-strong" for="diseaseSearch">Or search by name:</label>
      <div class="inline-actions" role="group" aria-label="Search group">
        <input type="text" id="diseaseSearch" placeholder="e.g., Dengue, Diabetes, Pneumonia" />
        <button id="searchBtn">Search</button>
      </div>
    </div>
  `;

  const showBtn = document.getElementById('showBtn');
  const diseaseSelect = document.getElementById('diseaseSelect');
  const diseaseSearch = document.getElementById('diseaseSearch');
  const searchBtn = document.getElementById('searchBtn');

  function renderDisease(d){
    if(!d){
      resultDiv.innerHTML = `<p>Not found in our list.</p>`;
      return;
    }
    resultDiv.innerHTML = `
      <div class="kv">
        <div class="key">Disease</div><div class="val"><strong>${d.name}</strong></div>
        <div class="key">Cure</div><div class="val">${d.cure}</div>
        <div class="key">Hospital</div>
        <div class="val">
          ${d.hospital}
          <div style="margin-top:8px">
            <a class="view-map" target="_blank" rel="noopener noreferrer" href="${gmLink(d.hospital)}">
              <button class="view-map">View on Map</button>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  showBtn.addEventListener('click', ()=>{
    const name = diseaseSelect.value;
    if(!name){
      resultDiv.innerHTML = `<p>Please select a disease.</p>`;
      return;
    }
    const d = DISEASES.find(x=>x.name === name);
    renderDisease(d);
  });

  searchBtn.addEventListener('click', ()=>{
    const q = normalize(diseaseSearch.value);
    if(!q){
      resultDiv.innerHTML = `<p>Enter a disease to search.</p>`;
      return;
    }
    // partial/case-insensitive search over names
    const match = DISEASES.find(d=> normalize(d.name).includes(q));
    renderDisease(match);
  });
}

/****************************************
 * Build Symptoms Chat View
 ****************************************/
function buildSymptomsView(){
  optionContainer.innerHTML = `
    <div class="chat-wrap">
      <div class="chatbox" id="chatbox" aria-live="polite"></div>
      <div class="chat-input">
        <input type="text" id="chatInput" placeholder="Describe your symptoms (e.g., high fever, chills, headache)"/>
        <button id="sendBtn">Send</button>
      </div>
    </div>
  `;

  const chatbox = document.getElementById('chatbox');
  const chatInput = document.getElementById('chatInput');
  const sendBtn = document.getElementById('sendBtn');

  function addMessage(text, who="bot"){
    const div = document.createElement('div');
    div.className = `message ${who}`;
    div.innerHTML = text;
    chatbox.appendChild(div);
    chatbox.scrollTop = chatbox.scrollHeight;
  }

  function greet(){
    addMessage(`<div class="msg-title">Hi! 👋</div>
      Tell me your symptoms in a sentence (e.g., <em>“high fever, chills, headache”</em>). 
      I’ll suggest likely conditions and a hospital in Odisha. (Except symptoms do not write anything)`);
  }

  greet();

  function scoreDisease(diseaseName, inputText){
    // 1) expanded keyword list if present
    const key = normalize(diseaseName);
    const keywords = SYMPTOM_KEYWORDS[key] || [];

    let score = 0;
    for(const kw of keywords){
      if(includesFuzzy(inputText, kw)) score += 2; // heavier weight for curated keywords
    }

    // 2) fallback: name tokens (helps generic mentions)
    const tokens = tokenize(diseaseName);
    for(const t of tokens){
      if(t.length > 3 && includesFuzzy(inputText, t)) score += 1;
    }
    return score;
  }

  function analyzeSymptoms(text){
    const input = normalize(text);
    if(!input) return [];

    // score each disease
    const scored = DISEASES.map(d => ({
      disease: d,
      score: scoreDisease(d.name, input)
    }))
    .filter(x => x.score > 0)
    .sort((a,b)=> b.score - a.score)
    .slice(0, 3); // top 3

    return scored;
  }

  function formatSuggestion(items){
    if(items.length === 0){
      return `I couldn’t confidently match your symptoms to diseases in my list. 
      Try adding more detail (duration, fever pattern, cough type, pain location, etc.). For Serious injuries Helpline No. : 7855969738 `;
    }
    const lines = items.map(x => {
      const d = x.disease;
      return `
        <div class="badge">${x.score} match</div>
        <div><strong>${d.name}</strong></div>
        <div class="msg-small">Suggested hospital: ${d.hospital} 
          · <a target="_blank" rel="noopener" href="${gmLink(d.hospital)}">View on Map</a>
        </div>
        <div style="margin:6px 0 10px;"><em>Cure overview:</em> ${d.cure}</div>
      `;
    }).join(`<hr style="border:none;border-top:1px dashed #ddd;margin:10px 0" />`);
    return `<div>${lines}</div>`;
  }

  function onSend(){
    const msg = chatInput.value.trim();
    if(!msg) return;
    addMessage(msg, "user");
    chatInput.value = "";

    // "Thinking…" message
    const loader = document.createElement('div');
    loader.className = 'message bot';
    loader.textContent = "Analyzing symptoms…";
    chatbox.appendChild(loader);
    chatbox.scrollTop = chatbox.scrollHeight;

    // simulate small delay
    setTimeout(()=>{
      const top = analyzeSymptoms(msg);
      loader.remove();
      addMessage(formatSuggestion(top), "bot");
    }, 200);
  }

  sendBtn.addEventListener('click', onSend);
  chatInput.addEventListener('keydown', e=>{
    if(e.key === "Enter") onSend();
  });
}

/****************************************
 * Mode switch
 ****************************************/
optionSelect.addEventListener('change', ()=>{
  resultDiv.innerHTML = "";
  optionContainer.innerHTML = "";
  const selected = optionSelect.value;

  if(selected === "symptoms"){
    buildSymptomsView();
  } else if(selected === "cure"){
    buildCureView();
  }
});

// Optional: default view (choose one)
// buildSymptomsView();
