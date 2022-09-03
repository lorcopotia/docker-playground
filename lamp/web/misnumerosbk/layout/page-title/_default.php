<?php
$titles = [
	"main" => "El inicio",
	"details" => "Detalles de los números",
	"generator" => "El generador de numeros",
];

if($_GET){
	$title = $_GET['page'] ? $titles[$_GET['page']] : 'No existe la pagina'; 
} else {
	$title = $titles['main'];
}

?>								
								<!--begin::Page title-->
								<div data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}" class="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0">
									<!--begin::Title-->
									<h1 class="d-flex text-dark fw-bolder fs-3 align-items-center my-1">Resultados Euromillones
									<!--begin::Separator-->
									<span class="h-20px border-1 border-gray-200 border-start ms-3 mx-2 me-1"></span>
									<!--end::Separator-->
									<!--begin::Description-->
									<span class="text-muted fs-7 fw-bold ms-2">#Euromillones #resultadoseuromillones #numeroseuromillones</span>
									<!--end::Description--></h1>
									<!--end::Title-->
								</div>
								<!--end::Page title-->
								