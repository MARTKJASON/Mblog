import Button from "@/Components/Button";
import SignInField from "@/Components/SignInField";

const LoginPage = () => {
    return (
      <>
        <title>Student Login </title>
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-[19px] font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white">
                  Sign in to your E - Learning account
                </h1>
                <form className="space-y-4 md:space-y-6">
                  <SignInField
                    id="email"
                    value="Your Email"
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    isAdmin={false}
                  />

                  <SignInField
                    id="password"
                    value="Password"
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    isAdmin={false}
                  />

                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          id="remember"
                          className="text-gray-500 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                  </div>
                  <Button text="Sign in as Student" />
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{' '}
                    <Link to="/register" className="text-blue-600">
                      Signup
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  export default LoginPage;
