


export default  {
    changeText(key){
        const list = {
            fullname: 'Full name',
            username: 'Username',
            password: 'Password'
        };
        return list[key] ? list[key] : key;
    },
    validate(rules, data){
        const result = {};
        rules.map((rule, index)=>{
            const key = Object.keys(rule)[0];
            const value = data[key];
            if(rule[key].require){
                if(typeof(value) === 'undefined' || value === ''){
                    result[key] = `${this.changeText(key)} is required`;
                }else {
                    result[key] = '';
                    // min length
                    if(typeof(rule[key].minLength) !== 'undefined'){
                        if(value.length < rule[key].minLength)
                            result[key] = `${this.changeText(key)} min length is ${rule[key].minLength}`
                        else result[key] = '';
                    }
                    // max length
                    if(typeof(rule[key].maxLength) !== 'undefined'){
                        if(value.length > rule[key].maxLength)
                            result[key] = `${this.changeText(key)} max length is ${rule[key].maxLength}`
                        else result[key] = '';
                    }
                }
            }
            
            
        })
        return result;
    }
}