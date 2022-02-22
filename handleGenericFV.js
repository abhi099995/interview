let str = "PIFV|meter_number|A123477,exec_datetime|29/10/2021 09:03:42,meter_current_datetime|2021-10-21 11:24:16,voltage|227.61,PF|0,phase_current|0,neutral_current|0,frequency|50.05,apparent_power_VA|0,active_power_W|0,cumm_power_on_dur_minute|111,cumm_tamper_count|8,cumm_billing_count|0,cumm_programming_count|0,import_Wh|2096,import_VAh|2318,MD_W|3150,MD_W_datetime|2021-10-19 18:00:00,MD_VA|3193,MD_VA_datetime|2021-10-19 18:00:00,export_Wh|0,export_VAh|0,load_limit_func_status|1,load_limit_value|17280,PIFV";

function getPipe(params) {
    for (var i = 0; i < 7; i++){
        if (str.charAt(i) == '|') {
            console.log(i);
            return i;
        }
    }
}

function getPipeat(str){
    for(var i = 0; i< str.length-1; i++){
        if(str.charAt(i)=='|'){
            return i;
            break;
        }
    }
}

const result=getPipeat(str)
console.log(result);

let genericArray = str.slice(result + 1, str.length - (result + 1));
console.log(genericArray);