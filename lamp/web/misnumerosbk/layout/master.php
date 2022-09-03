
<?php // Routing controller

if($_GET){
	$route = $_GET['page'] ? $_GET['page'] : 'main';
} else {
	$route = 'main';
}


?>

		<!--begin::Main-->
		<!--begin::Root-->
		<div class="d-flex flex-column flex-root">
			<!--begin::Page-->
			<div class="page d-flex flex-row flex-column-fluid">

<?php include 'aside/_base.php' ?>

				<!--begin::Wrapper-->
				<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">

					<!--begin::Content-->
					<div class="content d-flex flex-column flex-column-fluid" id="kt_content">

<?php include 'toolbars/_toolbar-1.php' ?>

						<!--begin::Post-->
						<div class="post d-flex flex-column-fluid" id="kt_post">


<?php include("pages/" . $route . ".php") ?>

						</div>
						<!--end::Post-->
					</div>
					<!--end::Content-->

<?php include '_footer.php' ?>

				</div>
				<!--end::Wrapper-->
			</div>
			<!--end::Page-->
		</div>
		<!--end::Root-->

		<!--end::Main-->
		