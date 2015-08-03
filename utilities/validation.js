module.exports = {
    isRequired:function(value){
        if(!value)
            return false;
        return true;
    },
    isEmail :function(email){
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    },
    isNumber : function(value){
        if(isNaN(value))
            return false;
        return true;
    }


}
