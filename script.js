// Hemoglobin HPLC Result Assistant - v1.0 (debug-friendly, DOM-ready version)
// Replace your existing script.js with this file. It preserves the rule set and
// wraps event wiring and evaluation in robust error handling.

(function(){

  // ---------- Paste the entire diagnosisConditions object exactly as you have it ----------
  // (I preserved your full content below)
  const diagnosisConditions = {
    "Normal": "hb >= 12 && hb <= 17 && rbc_count >= 3.4 && rbc_count <= 6.05 && mcv >= 80 && mcv <= 98 && mch >= 26 && mch <= 35 && rdw_cv >= 10 && rdw_cv <= 15 && f_pct >= 0 && f_pct <= 1.5 && a2_pct >= 1.5 && a2_pct <= 3.5 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    "Borderline F Elevation": "hb >= 10 && hb <= 14.5 && rbc_count >= 3.4 && rbc_count <= 6.05 && mcv >= 80 && mcv <= 98 && mch >= 26 && mch <= 35 && rdw_cv >= 10 && rdw_cv <= 20 && f_pct >= 1.6 && f_pct <= 2.9 && a2_pct >= 1.5 && a2_pct <= 3.5 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    " β-thalassemia trait": "hb >= 10 && hb <= 14.5 && rbc_count >= 3.8 && rbc_count <= 7.5 && mcv >= 58 && mcv <= 98 && mch >= 18 && mch <= 26 && rdw_cv >= 11 && rdw_cv <= 15 && f_pct >= 0 && f_pct <= 7 && a2_pct >= 3 && a2_pct <= 8 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    " β-thalassemia intermedia": "hb >= 6 && hb <= 13 && rbc_count >= 3.8 && rbc_count <= 7.5 && mcv >= 50 && mcv <= 75 && mch >= 15 && mch <= 21 && rdw_cv >= 11 && rdw_cv <= 18 && f_pct >= 5 && f_pct <= 50 && a2_pct >= 3 && a2_pct <= 8 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    " β-thalassemia major": "hb >= 2 && hb <= 8 && rbc_count >= 2 && rbc_count <= 6 && mcv >= 50 && mcv <= 70 && mch >= 12 && mch <= 21 && rdw_cv >= 14 && rdw_cv <= 25 && f_pct >= 50 && f_pct <= 100 && a2_pct >= 0 && a2_pct <= 8 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    " δβ-thalassemia trait": "hb >= 8 && hb <= 14 && rbc_count >= 3.8 && rbc_count <= 7.5 && mcv >= 60 && mcv <= 77 && mch >= 19 && mch <= 32 && rdw_cv >= 14 && rdw_cv <= 30 && f_pct >= 4 && f_pct <= 13 && a2_pct >= 0 && a2_pct <= 3 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    " δβ-thalassemia homozygous": "hb >= 6 && hb <= 13 && rbc_count >= 2 && rbc_count <= 6 && mcv >= 50 && mcv <= 70 && mch >= 12 && mch <= 21 && rdw_cv >= 14 && rdw_cv <= 20 && f_pct >= 90 && f_pct <= 100 && a2_pct >= 0 && a2_pct <= 1 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    "HPFH heterozygous": "hb >= 10 && hb <= 17 && rbc_count >= 3 && rbc_count <= 5.5 && mcv >= 75 && mcv <= 98 && mch >= 24 && mch <= 35 && rdw_cv >= 10 && rdw_cv <= 15 && f_pct >= 3 && f_pct <= 30 && a2_pct >= 1 && a2_pct <= 4 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    "HPFH homozygous (Deletional)": "hb >= 10 && hb <= 22 && rbc_count >= 3.8 && rbc_count <= 6.05 && mcv >= 70 && mcv <= 98 && mch >= 19 && mch <= 35 && rdw_cv >= 10 && rdw_cv <= 15 && f_pct === 100 && a2_pct === 0 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    "HPFH homozygous (Non-Deletional)": "hb >= 10 && hb <= 22 && rbc_count >= 3.8 && rbc_count <= 6.05 && mcv >= 70 && mcv <= 98 && mch >= 19 && mch <= 35 && rdw_cv >= 10 && rdw_cv <= 15 && f_pct >= 20 && f_pct <= 30 && a2_pct >= 0 && a2_pct <= 1 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    "Alpha Thalassemia Trait": "hb >= 10 && hb <= 15 && rbc_count >= 3.8 && rbc_count <= 7.5 && mcv >= 60 && mcv <= 79 && mch >= 19 && mch <= 26 && rdw_cv >= 10 && rdw_cv <= 15 && f_pct >= 0 && f_pct <= 1 && a2_pct >= 1 && a2_pct <= 3.5 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    "HbH": "hb >= 2 && hb <= 11 && rbc_count >= 3.8 && rbc_count <= 7.5 && mcv >= 50 && mcv <= 80 && mch >= 15 && mch <= 25 && rdw_cv >= 14 && rdw_cv <= 25 && f_pct >= 0 && f_pct <= 3 && a2_pct >= 0 && a2_pct <= 2.5 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes >= 0.1 && other_ret_minutes <= 1 && other_pct >= 1 && other_pct <= 40",
    "Hb Constant Spring heterozygous": "hb >= 8 && hb <= 17 && rbc_count >= 3.8 && rbc_count <= 7.5 && mcv >= 75 && mcv <= 98 && mch >= 20 && mch <= 35 && rdw_cv >= 10 && rdw_cv <= 15 && f_pct >= 0 && f_pct <= 1.5 && a2_pct >= 0 && a2_pct <= 3.5 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes >= 0.5 && other_ret_minutes <= 2.4 && other_pct >= 0.2 && other_pct <= 2",
    "Hb Constant Spring homozygous": "hb >= 8 && hb <= 17 && rbc_count >= 3.8 && rbc_count <= 7.5 && mcv >= 75 && mcv <= 98 && mch >= 20 && mch <= 35 && rdw_cv >= 10 && rdw_cv <= 15 && f_pct >= 0 && f_pct <= 1.5 && a2_pct >= 0 && a2_pct <= 3.5 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes >= 2.5 && other_ret_minutes <= 11 && other_pct >= 0.5 && other_pct <= 3",
    "HbS heterozygous": "hb >= 10 && hb <= 17 && rbc_count >= 3.4 && rbc_count <= 6.05 && mcv >= 70 && mcv <= 98 && mch >= 20 && mch <= 35 && rdw_cv >= 10 && rdw_cv <= 15 && f_pct >= 0 && f_pct <= 1.5 && a2_pct >= 1.5 && a2_pct <= 4 && c_pct === 0 && d_pct === 0 && s_pct >= 30 && s_pct <= 50 && other_ret_minutes === 0 && other_pct === 0",
    "HbS homozygous": "hb >= 1.5 && hb <= 14 && rbc_count >= 1 && rbc_count <= 4.5 && mcv >= 60 && mcv <= 114 && mch >= 12 && mch <= 40 && rdw_cv >= 14 && rdw_cv <= 30 && f_pct >= 0 && f_pct <= 40 && a2_pct >= 1 && a2_pct <= 5 && c_pct === 0 && d_pct === 0 && s_pct >= 55 && s_pct <= 95 && other_ret_minutes === 0 && other_pct === 0",
    "HbD-Punjab heterozygous": "hb >= 10 && hb <= 17 && rbc_count >= 3.4 && rbc_count <= 6.05 && mcv >= 75 && mcv <= 98 && mch >= 24 && mch <= 35 && rdw_cv >= 10 && rdw_cv <= 16 && f_pct >= 0 && f_pct <= 1 && a2_pct >= 1.5 && a2_pct <= 3.5 && c_pct === 0 && d_pct >= 30 && d_pct <= 50 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    "HbD-Punjab homozygous": "hb >= 9 && hb <= 17 && rbc_count >= 3.4 && rbc_count <= 7.5 && mcv >= 58 && mcv <= 98 && mch >= 18 && mch <= 26 && rdw_cv >= 11 && rdw_cv <= 20 && f_pct >= 0 && f_pct <= 1.5 && a2_pct >= 1.5 && a2_pct <= 3.5 && c_pct === 0 && d_pct >= 80 && d_pct <= 95 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    "HbD-Iran heterozygous": "hb >= 10 && hb <= 17 && rbc_count >= 3.4 && rbc_count <= 6.05 && mcv >= 75 && mcv <= 98 && mch >= 24 && mch <= 35 && rdw_cv >= 10 && rdw_cv <= 15 && f_pct >= 0 && f_pct <= 1 && a2_pct >= 30 && a2_pct <= 50 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    "HbD-Iran homozygous": "hb >= 9 && hb <= 17 && rbc_count >= 3.4 && rbc_count <= 7.5 && mcv >= 58 && mcv <= 98 && mch >= 18 && mch <= 35 && rdw_cv >= 11 && rdw_cv <= 20 && f_pct >= 0 && f_pct <= 1 && a2_pct >= 80 && a2_pct <= 99 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    "Hb Lepore heterozygous": "hb >= 10 && hb <= 14.5 && rbc_count >= 3.8 && rbc_count <= 7.5 && mcv >= 58 && mcv <= 98 && mch >= 18 && mch <= 26 && rdw_cv >= 11 && rdw_cv <= 15 && f_pct >= 0 && f_pct <= 3 && a2_pct >= 7 && a2_pct <= 20 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    "Hb Lepore homozygous": "hb >= 2 && hb <= 8 && rbc_count >= 2 && rbc_count <= 6 && mcv >= 50 && mcv <= 70 && mch >= 12 && mch <= 21 && rdw_cv >= 14 && rdw_cv <= 25 && f_pct >= 5 && f_pct <= 20 && a2_pct >= 80 && a2_pct <= 95 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    "HbC heterozygous": "hb >= 10 && hb <= 17 && rbc_count >= 3.4 && rbc_count <= 6.05 && mcv >= 70 && mcv <= 98 && mch >= 20 && mch <= 35 && rdw_cv >= 14 && rdw_cv <= 25 && f_pct >= 0 && f_pct <= 1 && a2_pct >= 1.5 && a2_pct <= 3.5 && c_pct >= 30 && c_pct <= 50 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    "HbC homozygous": "hb >= 7 && hb <= 17 && rbc_count >= 3 && rbc_count <= 6.05 && mcv >= 50 && mcv <= 75 && mch >= 15 && mch <= 26 && rdw_cv >= 11 && rdw_cv <= 25 && f_pct >= 0 && f_pct <= 3 && a2_pct >= 1 && a2_pct <= 3.5 && c_pct >= 80 && c_pct <= 95 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    "HbO-Arab heterozygous": "hb >= 10 && hb <= 17 && rbc_count >= 3.4 && rbc_count <= 6.05 && mcv >= 70 && mcv <= 98 && mch >= 20 && mch <= 35 && rdw_cv >= 11 && rdw_cv <= 18 && f_pct >= 0 && f_pct <= 1 && a2_pct >= 1.5 && a2_pct <= 3.5 && c_pct >= 0.1 && c_pct <= 40 && d_pct >= 0.1 && d_pct <= 20 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    "HbO-Arab homozygous": "hb >= 8 && hb <= 17 && rbc_count >= 3.4 && rbc_count <= 6.05 && mcv >= 55 && mcv <= 75 && mch >= 15 && mch <= 25 && rdw_cv >= 11 && rdw_cv <= 25 && f_pct >= 0 && f_pct <= 1 && a2_pct >= 1.5 && a2_pct <= 3.5 && c_pct >= 20 && c_pct <= 90 && d_pct >= 0.1 && d_pct <= 20 && s_pct >= 0 && s_pct <= 10 && other_ret_minutes === 0 && other_pct === 0",
    "HbE heterozygous": "hb >= 10 && hb <= 17 && rbc_count >= 3.4 && rbc_count <= 6.05 && mcv >= 70 && mcv <= 98 && mch >= 20 && mch <= 35 && rdw_cv >= 11 && rdw_cv <= 18 && f_pct >= 0 && f_pct <= 5 && a2_pct >= 20 && a2_pct <= 40 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    "HbE homozygous": "hb >= 8 && hb <= 17 && rbc_count >= 3.4 && rbc_count <= 6.05 && mcv >= 50 && mcv <= 98 && mch >= 18 && mch <= 35 && rdw_cv >= 11 && rdw_cv <= 18 && f_pct >= 0 && f_pct <= 15 && a2_pct >= 80 && a2_pct <= 99 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    "HbE/β-thalassemia (Compound heterozygous)": "hb >= 2.5 && hb <= 13 && rbc_count >= 2 && rbc_count <= 6 && mcv >= 50 && mcv <= 70 && mch >= 12 && mch <= 18 && rdw_cv >= 14 && rdw_cv <= 25 && f_pct >= 5 && f_pct <= 87 && a2_pct >= 30 && a2_pct <= 75 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    "HbS/β-thalassemia (Compound heterozygous)": "hb >= 5 && hb <= 17 && rbc_count >= 1 && rbc_count <= 5.5 && mcv >= 60 && mcv <= 85 && mch >= 18 && mch <= 26 && rdw_cv >= 14 && rdw_cv <= 30 && f_pct >= 5 && f_pct <= 40 && a2_pct >= 3 && a2_pct <= 6 && c_pct === 0 && d_pct === 0 && s_pct >= 40 && s_pct <= 70 && other_ret_minutes === 0 && other_pct === 0",
    "HbC/β-thalassemia (Compound heterozygous)": "hb >= 7 && hb <= 17 && rbc_count >= 3.8 && rbc_count <= 7.5 && mcv >= 50 && mcv <= 70 && mch >= 12 && mch <= 26 && rdw_cv >= 14 && rdw_cv <= 25 && f_pct >= 2 && f_pct <= 10 && a2_pct >= 3 && a2_pct <= 8 && c_pct >= 70 && c_pct <= 99 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    "Hb Lepore/β-thalassemia (Compound heterozygous)": "hb >= 2 && hb <= 13 && rbc_count >= 2 && rbc_count <= 6 && mcv >= 50 && mcv <= 80 && mch >= 12 && mch <= 26 && rdw_cv >= 14 && rdw_cv <= 25 && f_pct >= 5 && f_pct <= 30 && a2_pct >= 10 && a2_pct <= 90 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    "HbO-Arab/β-thalassemia (Compound heterozygous)": "hb >= 7 && hb <= 17 && rbc_count >= 3.8 && rbc_count <= 7.5 && mcv >= 50 && mcv <= 70 && mch >= 12 && mch <= 26 && rdw_cv >= 14 && rdw_cv <= 25 && f_pct >= 5 && f_pct <= 40 && a2_pct >= 3 && a2_pct <= 8 && c_pct >= 0.1 && c_pct <= 40 && d_pct >= 0.1 && d_pct <= 20 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    "HbQ-India/β-thalassemia (Compound heterozygous)": "hb >= 7 && hb <= 17 && rbc_count >= 3.8 && rbc_count <= 7.5 && mcv >= 50 && mcv <= 98 && mch >= 12 && mch <= 35 && rdw_cv >= 14 && rdw_cv <= 30 && f_pct >= 0 && f_pct <= 10 && a2_pct >= 3 && a2_pct <= 8 && c_pct >= 0.1 && c_pct <= 20 && d_pct === 0 && s_pct >= 0.1 && s_pct <= 20 && other_ret_minutes === 0 && other_pct === 0",
    "β-thalassemia/δβ-thalassemia (Compound heterozygous)": "hb >= 6 && hb <= 13 && rbc_count >= 3.8 && rbc_count <= 7.5 && mcv >= 50 && mcv <= 75 && mch >= 15 && mch <= 21 && rdw_cv >= 14 && rdw_cv <= 35 && f_pct >= 5 && f_pct <= 100 && a2_pct >= 1 && a2_pct <= 3.5 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    "HPFH/β-thalassemia syndrome ": "hb >= 6 && hb <= 17 && rbc_count >= 1 && rbc_count <= 4.5 && mcv >= 45 && mcv <= 90 && mch >= 12 && mch <= 28 && rdw_cv >= 11 && rdw_cv <= 25 && f_pct >= 5 && f_pct <= 50 && a2_pct >= 1 && a2_pct <= 3.5 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    " β -thalassemia/δ-thalassemia (Compound heterozygous)": "hb >= 10 && hb <= 14.5 && rbc_count >= 3.8 && rbc_count <= 7.5 && mcv >= 58 && mcv <= 98 && mch >= 18 && mch <= 26 && rdw_cv >= 11 && rdw_cv <= 15 && f_pct >= 0 && f_pct <= 7 && a2_pct >= 1.5 && a2_pct <= 4 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    "Co-inheritance of α-thalassemia and β-thalassemia": "hb >= 8 && hb <= 17 && rbc_count >= 3.8 && rbc_count <= 7.5 && mcv >= 58 && mcv <= 90 && mch >= 18 && mch <= 26 && rdw_cv >= 11 && rdw_cv <= 25 && f_pct >= 1 && f_pct <= 20 && a2_pct >= 1.5 && a2_pct <= 3.5 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    "Co-inheritance of β-thalassemia trait and HbH disease.": "hb >= 5 && hb <= 12 && rbc_count >= 3.8 && rbc_count <= 7.5 && mcv >= 50 && mcv <= 80 && mch >= 12 && mch <= 24 && rdw_cv >= 14 && rdw_cv <= 25 && f_pct >= 1 && f_pct <= 10 && a2_pct >= 1 && a2_pct <= 8 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes >= 0.1 && other_ret_minutes <= 1 && other_pct >= 1 && other_pct <= 10",
    "HbE/HbS (Compound heterozygous)": "hb >= 7 && hb <= 14 && rbc_count >= 1 && rbc_count <= 4.5 && mcv >= 50 && mcv <= 80 && mch >= 12 && mch <= 26 && rdw_cv >= 14 && rdw_cv <= 25 && f_pct >= 0 && f_pct <= 7 && a2_pct >= 1.5 && a2_pct <= 40 && c_pct === 0 && d_pct === 0 && s_pct >= 40 && s_pct <= 70 && other_ret_minutes === 0 && other_pct === 0",
    "HbS/HbD-Punjab (Compound heterozygous)": "hb >= 1.5 && hb <= 14 && rbc_count >= 1 && rbc_count <= 4.5 && mcv >= 50 && mcv <= 80 && mch >= 12 && mch <= 24 && rdw_cv >= 14 && rdw_cv <= 25 && f_pct >= 0 && f_pct <= 20 && a2_pct >= 1 && a2_pct <= 5 && c_pct === 0 && d_pct >= 30 && d_pct <= 70 && s_pct >= 30 && s_pct <= 70 && other_ret_minutes === 0 && other_pct === 0",
    "HbD-Punjab/HbE (Compound heterozygous)": "hb >= 9 && hb <= 17 && rbc_count >= 3.4 && rbc_count <= 7.5 && mcv >= 58 && mcv <= 98 && mch >= 18 && mch <= 26 && rdw_cv >= 11 && rdw_cv <= 20 && f_pct >= 0 && f_pct <= 2 && a2_pct >= 10 && a2_pct <= 50 && c_pct === 0 && d_pct >= 20 && d_pct <= 80 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    "α-globin gene triplication with β-thalassemia trait": "hb >= 6 && hb <= 13 && rbc_count >= 2 && rbc_count <= 6 && mcv >= 50 && mcv <= 98 && mch >= 12 && mch <= 26 && rdw_cv >= 14 && rdw_cv <= 25 && f_pct >= 0 && f_pct <= 8 && a2_pct >= 1 && a2_pct <= 5 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    "α-globin gene quadruplication with β-thalassemia trait": "hb >= 6 && hb <= 13 && rbc_count >= 2 && rbc_count <= 6 && mcv >= 50 && mcv <= 98 && mch >= 12 && mch <= 26 && rdw_cv >= 14 && rdw_cv <= 25 && f_pct >= 1 && f_pct <= 40 && a2_pct >= 1 && a2_pct <= 6 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    " α-thalassemia with HbE": "hb >= 10 && hb <= 17 && rbc_count >= 3.4 && rbc_count <= 7.5 && mcv >= 50 && mcv <= 80 && mch >= 12 && mch <= 28 && rdw_cv >= 11 && rdw_cv <= 25 && f_pct >= 0 && f_pct <= 7 && a2_pct >= 15 && a2_pct <= 40 && c_pct === 0 && d_pct === 0 && s_pct === 0 && other_ret_minutes === 0 && other_pct === 0",
    "HbQ-India heterozygous": "hb >= 10 && hb <= 17 && rbc_count >= 3.4 && rbc_count <= 6.05 && mcv >= 75 && mcv <= 98 && mch >= 24 && mch <= 35 && rdw_cv >= 10 && rdw_cv <= 15 && f_pct >= 0 && f_pct <= 1 && a2_pct >= 1.5 && a2_pct <= 8 && c_pct >= 0.1 && c_pct <= 20 && d_pct === 0 && s_pct >= 0.1 && s_pct <= 20 && other_ret_minutes === 0 && other_pct === 0",
    "HbQ-India homozygous": "hb >= 7 && hb <= 17 && rbc_count >= 3 && rbc_count <= 6.05 && mcv >= 50 && mcv <= 75 && mch >= 15 && mch <= 26 && rdw_cv >= 11 && rdw_cv <= 25 && f_pct >= 0 && f_pct <= 1 && a2_pct >= 1.5 && a2_pct <= 8 && c_pct >= 0.1 && c_pct <= 20 && d_pct === 0 && s_pct >= 0.1 && s_pct <= 40 && other_ret_minutes === 0 && other_pct === 0"
  };

  // ---------- Priority array (kept as in your file) ----------
  const priorityOrder = [
    "HbE heterozygous",
    "HbS heterozygous",
    " β-thalassemia trait",
    "α-thalassemia trait",
    "HbD-Punjab (aka HbD-Los Angeles) heterozygous",
    "δβ-thalassemia Trait",
    "HPFH heterozygous",
    "HbE/β-thalassemia (Compound heterozygous)",
    "HbS/β-thalassemia (Compound heterozygous)",
    "Borderline F Elevation",
    "HbE homozygous",
    " β-thalassemia Intermedia",
    "Hb Constant Spring heterozygous",
    "HbD-Iran heterozygous",
    "HbO-Arab heterozygous",
    "HbC heterozygous",
    "HbQ-India heterozygous",
    "Co-inheritance of α-thalassemia and β-thalassemia",
    "HbD-Punjab (aka HbD-Los Angeles) homozygous",
    "Hb Lepore heterozygous",
    "HbC/β-thalassemia (Compound heterozygous)",
    "Hb Lepore/β-thalassemia (Compound heterozygous)",
    "HbO-Arab/β-thalassemia (Compound heterozygous)",
    "HbQ-India/β-thalassemia (Compound heterozygous)",
    "β-thalassemia/δβ-thalassemia (Compound heterozygous)",
    "HPFH/β-thalassemia syndrome ",
    " β -thalassemia/δ-thalassemia (Compound heterozygous)",
    "Co-inheritance of β-thalassemia trait and HbH disease.",
    "Hb Constant Spring homozygous",
    "Hb Lepore homozygous",
    "Beta Thalassemia Major",
    "HbS homozygous",
    "Delta Beta Thalassemia homozygous",
    "HPFH homozygous (Deletional)",
    "HPFH homozygous (Non-Deletional)",
    "HbH",
    "HbD-Iran homozygous",
    "HbO-Arab homozygous",
    "HbC homozygous",
    "HbE/HbS (Compound heterozygous)",
    "HbS/HbD-Punjab (Compound heterozygous)",
    "HbD-Punjab/HbE (Compound heterozygous)",
    "α-globin gene triplication with β-thalassemia trait",
    "α-globin gene quadruplication with β-thalassemia trait",
    "α -thalassemia with HbE",
    "Normal",
    "HbQ-India homozygous"
  ];

  // ---------- Helper functions ----------
  function parseNumber(v){
    if(v === null || v === undefined || v === '') return null;
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
  }

  function collectValues(){
    return {
      hb: parseNumber(document.getElementById('hb')?.value),
      rbc_count: parseNumber(document.getElementById('rbc')?.value),
      mcv: parseNumber(document.getElementById('mcv')?.value),
      mch: parseNumber(document.getElementById('mch')?.value),
      rdw_cv: parseNumber(document.getElementById('rdw')?.value),
      f_pct: parseNumber(document.getElementById('f_pct')?.value),
      a2_pct: parseNumber(document.getElementById('a2_pct')?.value),
      c_pct: parseNumber(document.getElementById('c_pct')?.value),
      d_pct: parseNumber(document.getElementById('d_pct')?.value),
      s_pct: parseNumber(document.getElementById('s_pct')?.value),
      other_ret_minutes: parseNumber(document.getElementById('other_ret')?.value),
      other_pct: parseNumber(document.getElementById('other_pct')?.value)
    };
  }

  function evaluateConditions(values){
    const matches = [];
    for(const [name, expr] of Object.entries(diagnosisConditions)){
      try{
        const fn = new Function('hb','rbc_count','mcv','mch','rdw_cv','f_pct','a2_pct','c_pct','d_pct','s_pct','other_ret_minutes','other_pct', 'return ('+expr+');');
        const res = fn(values.hb, values.rbc_count, values.mcv, values.mch, values.rdw_cv, values.f_pct, values.a2_pct, values.c_pct, values.d_pct, values.s_pct, values.other_ret_minutes, values.other_pct);
        if(res) matches.push(name);
      }catch(e){
        // If a predicate throws, record the error (but continue)
        console.error('Predicate error for', name, e);
        // Attach a marker so user sees there's an issue with this predicate
        matches.push({__error: true, name, message: String(e)});
      }
    }
    return matches;
  }

  function rankMatches(matches){
    // Filter out error markers first
    const errorMarks = matches.filter(m => m && m.__error);
    const goodMatches = matches.filter(m => !(m && m.__error));
    // sort goodMatches by priority list
    goodMatches.sort((a,b)=>{
      const ia = priorityOrder.indexOf(a), ib = priorityOrder.indexOf(b);
      if(ia !== -1 && ib !== -1) return ia - ib;
      if(ia !== -1) return -1;
      if(ib !== -1) return 1;
      return a.localeCompare(b);
    });
    return {goodMatches, errorMarks};
  }

  function showResultsUI(rankedObj, missing){
    const resultsSection = document.getElementById('results');
    const list = document.getElementById('resultsList');
    list.innerHTML = '';
    resultsSection.style.display = 'block';

    const {goodMatches, errorMarks} = rankedObj;

    if(goodMatches.length === 0 && errorMarks.length === 0){
      const noMatch = document.createElement('div');
      noMatch.className = 'result-item';
      noMatch.innerHTML = '<div style="font-weight:700">No matching diagnosis</div><div class="note">No diagnostic pattern matched the provided data. Consider completing missing parameters and correlating clinically.</div>';
      list.appendChild(noMatch);
      return;
    }

    for(const name of goodMatches){
      const el = document.createElement('div');
      el.className = 'result-item';
      el.innerHTML = `<div style="font-weight:700">${name}</div><div class="priority">Suggested diagnosis / differential (algorithmic)</div>`;
      list.appendChild(el);
    }

    // show any predicate errors (so you can debug which rule caused an exception)
    if(errorMarks.length > 0){
      const errBox = document.createElement('div');
      errBox.className = 'result-item';
      errBox.style.borderLeftColor = 'var(--red)';
      let txt = '<div style="font-weight:700;color:var(--red)">Rule evaluation errors</div><div class="note">';
      txt += '<ul style="margin:8px 0 0 18px;padding:0">';
      for(const em of errorMarks){
        txt += `<li><strong>${em.name}</strong>: ${em.message}</li>`;
      }
      txt += '</ul></div>';
      errBox.innerHTML = txt;
      list.appendChild(errBox);
      console.warn('Predicate errors returned; see UI and console for details.');
    }

    if(missing){
      const el = document.createElement('div');
      el.className = 'result-item';
      el.style.borderLeftColor = 'var(--red)';
      el.innerHTML = '<div style="font-weight:700;color:var(--red)">Partial evaluation — limited confidence</div><div class="note">Complete all parameters for higher diagnostic accuracy. This output is a decision-support aid only.</div>';
      list.appendChild(el);
    }
  }

  // ---------- DOM ready wiring ----------
  document.addEventListener('DOMContentLoaded', function(){

    // Quick sanity: ensure expected elements exist
    const calcBtn = document.getElementById('calc');
    const resetBtn = document.getElementById('reset');
    const resultsSection = document.getElementById('results');
    const resultsList = document.getElementById('resultsList');
    const partialWarningEl = document.getElementById('partialWarning');

    if(!calcBtn || !resetBtn || !resultsSection || !resultsList || !partialWarningEl){
      console.error('Required DOM elements not found. IDs expected: calc, reset, results, resultsList, partialWarning');
      // show a visible error
      alert('App initialization failed: required UI elements missing. Check console for details.');
      return;
    }

    calcBtn.addEventListener('click', ()=> {
      try{
        const values = collectValues();
        const required = ['hb','rbc_count','mcv','mch','rdw_cv','f_pct','a2_pct','c_pct','d_pct','s_pct','other_ret_minutes','other_pct'];
        let missing = false;
        for(const k of required){ if(values[k] === null) missing = true; }

        partialWarningEl.style.display = missing ? 'block' : 'none';

        // Evaluate rules
        const rawMatches = evaluateConditions(values);
        // rawMatches may include error markers
        const rankedObj = rankMatches(rawMatches);
        showResultsUI(rankedObj, missing);

      }catch(e){
        console.error('Unexpected error during calculate:', e);
        // show error to user
        resultsList.innerHTML = '';
        resultsSection.style.display = 'block';
        const err = document.createElement('div');
        err.className = 'result-item';
        err.style.borderLeftColor = 'var(--red)';
        err.innerHTML = `<div style="font-weight:700;color:var(--red)">Application error</div><div class="note">${String(e)}</div>`;
        resultsList.appendChild(err);
      }
    });

    resetBtn.addEventListener('click', ()=> {
      ['hb','rbc','mcv','mch','rdw','f_pct','a2_pct','c_pct','d_pct','s_pct','other_ret','other_pct'].forEach(id => {
        const el = document.getElementById(id);
        if(el) el.value = '';
      });
      resultsSection.style.display = 'none';
      partialWarningEl.style.display = 'none';
      resultsList.innerHTML = '';
    });

    // Initialization success
    console.info('Hemoglobin HPLC Result Assistant initialized.');
  });

})();
