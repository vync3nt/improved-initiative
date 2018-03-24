import React = require("react");
import { Listing } from "../Listing";
import { ListingButton } from "./ListingButton";

export interface FolderProps {
    name: string;
}

interface FolderState {
    open: boolean;
}

export class Folder extends React.Component<FolderProps, FolderState> {
    constructor(props: FolderProps) {
        super(props);
        this.state = {
            open: false,
        };
    }

    private toggleState = () => this.setState({ open: !this.state.open });

    public render() {
        return <li className="c-listing"><ListingButton text={this.props.name} buttonClass={this.state.open ? "folder-open" : "folder"} onClick={this.toggleState} /></li>;
    }
}
