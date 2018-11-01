import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { BaseModelVm } from '../../../shared/base.model';
import { UserRole } from '../user-role.enum';

export class UserVm extends BaseModelVm {
    @ApiModelProperty() username: string;
    @ApiModelPropertyOptional() firstName?: string;
    @ApiModelPropertyOptional() lastName?: string;
    @ApiModelPropertyOptional() fullName?: string;
    @ApiModelPropertyOptional() address?: string;
    @ApiModelPropertyOptional() age?: number;
    @ApiModelPropertyOptional() salary?: number;
    @ApiModelPropertyOptional({ enum: UserRole })
    role?: UserRole;
}