<script>
	let items = [
		{
			id: 2,
			content: '모건 500g 2개, 홈타운 1kg 2개',
			price: 70000,
			status: 'confirm'
		},
		{
			id: 1,
			content: '모건 500g 1개, 홈타운 1kg 2개',
			price: 50000,
			status: 'order'
		}
	];
	let item = {
		name: '',
		count: '1'
	};
	let newItem = [];
	const addItem = () => {
		newItem = [...newItem, item];
		item = {
			name: '',
			count: '1'
		};
	};
</script>

<section class="position-relative">
	<div class="container py-9 py-lg-11">
		<div class="row">
			<div class="col-md-10 col-lg-10 mx-auto">
				<div class="position-relative">
					<h2>신규 주문</h2>
					<div class="width-7x pt-1 bg-primary mb-7" />
					<!-- Contacts Form -->

					<form
						action="#"
						method="post"
						role="form"
						class="needs-validation mb-5 mb-lg-7"
						novalidate
					>
						<div class="row">
							<!-- Input -->
							<div class="col-sm-5 mb-3">
								<label class="form-label" for="name">주문</label>
								<select
									bind:value={item.name}
									name="name"
									class="form-control"
									id="name"
									placeholder="John Doe"
								>
									<option disabled>원두 선택</option>
									<option value="홈타운">홈타운</option>
									<option value="모건타운">모건타운</option>
									<option value="다크">다크</option>
								</select>
							</div>
							<!-- End Input -->

							<!-- Input -->
							<div class="col-sm-5 mb-3">
								<label class="form-label" for="email">수량</label>
								<select
									bind:value={item.count}
									name="name"
									class="form-control"
									id="name"
									placeholder="John Doe"
								>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
								</select>
							</div>
							<div class="col-sm-2 mb-3">
								<label class="form-label" for="add">수량</label>
								<input
									on:click={() => addItem()}
									type="button"
									class="form-control btn btn-primary"
									id="add"
									value="추가"
								/>
							</div>

							<div class="w-100" />
						</div>
						<div class="col-md-4 mb-4 mb-md-0">
							<ul class="list-unstyled">
								{#each newItem as item}
									<li class="mb-2">{item.name}, {item.count}개</li>
								{/each}
							</ul>
						</div>
						<!-- Message -->
						<div class="mb-3">
							<label for="message" class="form-label">Message</label>
							<textarea class="form-control" name="message" placeholder="Hi there...." />
						</div>

						<div class="d-md-flex justify-content-md-between align-items-center">
							<p class="small mb-4 text-body-secondary mb-md-0">
								We'll get back to you in 1-2 business days.
							</p>
							<input
								type="submit"
								name="submit"
								value="Submit message"
								id="sendBtn"
								class="btn btn-lg btn-primary"
							/>
						</div>
					</form>
					<!-- End Contacts Form -->
				</div>
			</div>
		</div>
	</div>
</section>
<section class="position-relative">
	<div class="container position-relative pt-7 pt-lg-7">
		<div class="row">
			<div class="col-lg-10 mx-auto">
				<table class="table mb-9">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">주문 내역</th>
							<th scope="col">금액</th>
							<th scope="col">상태</th>
						</tr>
					</thead>
					<tbody>
						{#each items as item}
							<tr>
								<td>{item.id}</td>
								<td>{item.content}</td>
								<td>{item.price}</td>
								<td>{item.status}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</section>
