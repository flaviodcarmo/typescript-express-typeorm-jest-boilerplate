import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import "reflect-metadata"
import BaseProperty from "./BaseProperty";

@Entity('confirmationType')
class ConfirmationType extends BaseProperty {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;
}

export default ConfirmationType;