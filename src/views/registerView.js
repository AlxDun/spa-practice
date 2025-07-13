export function showRegister() {
    return `
    <main class="register-container">
        <h1>Register</h1>
        <form id="register-form">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" required>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" required>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" required>
            <button type="submit">Entrar</button>
        </form>
        <div>
            <a href="/login" data-link>Inicia sesion</a>
        </div>
    </main>
    `
}