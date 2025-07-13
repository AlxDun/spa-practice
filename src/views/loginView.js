export function showLogin(){
    return `
    <main class="login-container">
        <h1>Login</h1>
        <form id="login-form">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" required>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" required>
            <button type="submit">Entrar</button>
        </form>
        <div>
            <a href="/register" data-link>Registrate</a>
        </div>
    </main>
    `
}
