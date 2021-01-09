import React, { Component } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ProductService from "./ProductService";
// import ProductService from 'Components/service/ProductService';
// import {  ProductService } from 'Components/service/ProductService';

class DataTableDemo extends Component {
	constructor(props) {
		super(props);
		this.state = {
            products: []

		};

		this.productService = new ProductService();
	}

	componentDidMount() {
		// this.productService.getProductsSmall().then((data) => this.setState({ products: data }));
		const produtosTeste = [
			{
				code: "1",
				name: "Teste",
				category: "Categoria",
				quantity: 20
			},
			{
				code: "2",
				name: "Teste2",
				category: "Categoria2",
				quantity: 220
			},
			{
				code: "2",
				name: "Teste2",
				category: "Categoria2",
				quantity: 220
			},
			{
				code: "2",
				name: "Teste2",
				category: "Categoria2",
				quantity: 220
			},
			{
				code: "2",
				name: "Teste2",
				category: "Categoria2",
				quantity: 220
			},
			{
				code: "2",
				name: "Teste2",
				category: "Categoria2",
				quantity: 220
			},
			{
				code: "2",
				name: "Teste2",
				category: "Categoria2",
				quantity: 220
			},
			{
				code: "2",
				name: "Teste2",
				category: "Categoria2",
				quantity: 220
			},
			{
				code: "2",
				name: "Teste2",
				category: "Categoria2",
				quantity: 220
			},
			{
				code: "2",
				name: "Teste2",
				category: "Categoria2",
				quantity: 220
			},
			{
				code: "2",
				name: "Teste2",
				category: "Categoria2",
				quantity: 220
			},
			{
				code: "2",
				name: "Teste2",
				category: "Categoria2",
				quantity: 220
			},
			{
				code: "2",
				name: "Teste2",
				category: "Categoria2",
				quantity: 220
			},
			{
				code: "2",
				name: "Teste2",
				category: "Categoria2",
				quantity: 220
			},
			{
				code: "2",
				name: "Teste2",
				category: "Categoria2",
				quantity: 220
			},
			{
				code: "2",
				name: "Teste2",
				category: "Categoria2",
				quantity: 220
			}
        ];



		this.setState({
			products: produtosTeste
		});
	}

	render() {
		return (
			<div>
				{/* <h1>teste</h1> */}
				<DataTable
					value={this.state.products}
					resizableColumns
					columnResizeMode="fit"
					paginator
					rows={5}
					totalRecords={this.state.totalRecords}
					className="p-datatable-striped"
				>
					<Column field="code" header="Code" sortable />
					<Column field="name" header="Name" sortable />
					<Column field="category" header="Category" sortable />
					<Column field="quantity" header="Quantity" sortable />
				</DataTable>
			</div>
		);
	}
}

export async function getStaticProps() {
	// console.log("Dentro do getStaticProps");
	// const APIURL = "http://jsonplaceholder.typicode.com/posts";
	const res = await fetch("http://jsonplaceholder.typicode.com/posts");
	const posts = await res.json();
    console.log("Carregando dados");

    const produtosTeste2 = []


    produtosTeste2.code = posts.id
    produtosTeste2.name = posts.name
    produtosTeste2.category = posts.name
    produtosTeste2.quantity = posts.lng

	return {
		props: {
			produtosTeste2
		},
		revalidate: 1
	};
}

export default DataTableDemo;
