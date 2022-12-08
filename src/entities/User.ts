import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinTable } from "typeorm"
import BaseProperty from "./BaseProperty";
import "reflect-metadata"

@Entity('users')
class User extends BaseProperty {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column({ type: "date" })
    birthDay: string;
    
    @Column()
    profileId: string;

    profileName: string;

    @Column({ type: "boolean", select: false })
    isSentMail: number;

    @Column({ type: "boolean" })
    isConfirmed: number;

    super(entity : any = {}) {
        this.name               = entity.name ? entity.name : this.name;
        this.email              = entity.email ? entity.email : this.email;
        this.birthDay           = entity.birthDay ? entity.birthDay : this.birthDay;
        this.profileId          = entity.profileId ? entity.profileId : this.profileId;
        this.createdByUserId    = entity.createdByUserId ? entity.createdByUserId : this.createdByUserId;
    }
}

export default User;