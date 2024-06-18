const Home = () => {
    return (
        <div>
            <h1 className="text-5xl">Главная</h1>
            <div className="h-1 w-full border-t border-gray-400 mt-2" />
            <h1 className="text-5xl mt-10">Добро пожаловать в мазазин <strong>Авоська!</strong></h1>
            <div className="text-2xl mt-10 space-y-3">
                <p>Рекоменудем, Вам, <a href="/login" className="underline font-normal" title="авторизация">авторизоваться</a> перед тем как начать работу на сайте.</p>
                <p>Либо <a href="/registration" className="underline font-normal" title="регистрация">зарегистрироваться</a>, если ещё не успели завести аккаунт!</p>

            </div>
        </div>
    )
}

export default Home;