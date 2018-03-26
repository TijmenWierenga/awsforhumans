import Form from './../components/Form';

describe('it_checks_for_errors', () => {
    const form = new Form('test');

    it('does_not_have_errors_by_default', () => {
        if (form.hasErrors()) {
            throw new Error("Form should not have errors by default");
        }
    });
});

describe('it_sets_a_form_field', () => {
    const form = new Form('email');

    it('sets_a_simple_value_by_name', () => {
        let email = 't.wierenga@live.nl';
        form.set('email', email);

        if (form.get('email') !== 't.wierenga@live.nl') {
            throw new Error(`Failed asserting that email equals to ${email}`);
        }
    })
});
