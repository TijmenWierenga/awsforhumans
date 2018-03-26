class Form {
    /**
     * @param fields array
     */
    constructor(fields) {
        this.values = {};
        this.errors = [];

        for (let field in fields) {
            this.set(fields[field], "");
        }
    }

    hasErrors() {
        return this.errors.length > 0;
    }

    set(name, value) {
        this.values[name] = value;
    }

    get(name) {
        return this.values[name];
    }

    submit(url) {
        console.log("Sending for to:" + url);
        console.log(this.values);
    }
}

export default Form;
