import React from 'react'
import CategoryService from "../../services/CategoryService"
import CategoryModel from "../../models/Category"

type Props = {}
type State = {
    categories: CategoryModel[]
}

export default class Frontend extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            categories: []
        } as State
    }
    async componentDidMount() {
        const categories: CategoryModel[] = await new CategoryService().get();
        this.setState({
            categories: categories
        })
    }

    render() {
        return (
            <div>
                <h1>Hello frontend !</h1>

                <p>{this.state.categories.map(cat => (
                    <Category category={cat}></Category>
                ))}</p>
            </div>
        )

    }
}

const Category = ({ category }: {
    category: CategoryModel
}) => {
    return (
        <div>Id: '{category.id}', name: '{category.name}'</div>
    )
}