<section class="position-relative">
	<div class="container position-relative pt-12 pt-lg-15">
		<div class="row d-md-flex justify-content-center">
			<div class="col-lg-8 col-md-10">
				<form class="needs-validation" novalidate action="/login/?/login" method="POST">
					<div>
						<h3 class="mb-1">Welcome back!</h3>
						<p class="mb-4 text-body-secondary">Please Sign In with details...</p>
					</div>
					<div class="input-icon-group mb-3">
						<span class="input-icon">
							<i class="bx bx-envelope" />
						</span>
						<input
							type="text"
							name="id"
							required
							class="form-control"
							autofocus=""
							placeholder="Username"
						/>
					</div>
					<div class="input-icon-group mb-3">
						<span class="input-icon">
							<i class="bx bx-key" />
						</span>
						<input type="password" required class="form-control" placeholder="Password" />
					</div>
					<div class="mb-3 d-flex justify-content-between">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
							<label class="form-check-label" for="flexCheckDefault"> Remember me </label>
						</div>
						<div>
							<label class="text-end d-block small mb-0"
								><a href="page-account-forget-password.html" class="link-decoration"
									>Forget Password?</a
								></label
							>
						</div>
					</div>

					<div class="d-grid">
						<button class="btn btn-primary btn-hover-arrow" type="submit">
							<span>Sign in</span>
						</button>
					</div>
					<p class="pt-4 mb-0 text-body-secondary">
						Don’t have an account yet? <a
							href="page-account-signup.html"
							class="ms-2 pb-0 fw-semibold link-underline">Sign Up</a
						>
					</p>
				</form>
			</div>
		</div>
	</div>
</section>
