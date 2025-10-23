(() => document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded');
    // Modelos
    const signupModel = [
        {id: 'sign_username', name: 'username', type: 'text'},
        {id: 'email', name: 'email', type: 'email'},
        {id: 'pass1', name:'password', type:'password', autocomplete: true},
        {id: 'pass2', name:'password', type:'password', autocomplete: true},
        {id: 'sign_submit', type:'submit', value: 'Registrarse'},
    ]
    const loginModel = [
        {id: 'login_username', name: 'username', type: 'text'},
        {id: 'password', name:'password', type:'password', autocomplete: true},
        {id: 'login_submit', type:'submit', value: 'Iniciar Sesion'},
    ]
    const createForm = (formFields, props, callBack) => {
        const form = Object.assign(document.createElement('form'), props)
        form.innerHTML+=`<h2>${props.formTitle}</h2>`;
        formFields.map(ctrlProps => {
            const ctrl = Object.assign(document.createElement('input'), 
            {className: 'form-control', ...ctrlProps})
            form.appendChild(ctrl);
        })
        form.addEventListener('submit', (e) => {
            // e.preventDefault();
            // callBack(e);
        })
        return form;
    } 
    const formAction = async (e) => {
        const url = new URL(e.target.action).pathname;
        const formData = new FormData(e.target)
        const body = [...formData.entries()]
        const options = {
            method: e.target.method.toUpperCase(),
            headers: { 'Response-Type': 'application/json'},
            body,
        }
        console.log(options);
        const response = await fetch(url, options)
        const data = await response.json();     
    }
    // Controladores
    const LoginForm = () => createForm(loginModel, { id:'login',  method: 'post', action: '/api/login', formTitle: 'Iniciar Sesion' }, formAction);
    const SignUpForm = () => createForm(signupModel, { id:'signup',  method: 'post', action: '/api/signup', formTitle: 'Registrarse' }, formAction);
    // Renderizado
    root.append(
        LoginForm(),
        SignUpForm(),
    )
}))();