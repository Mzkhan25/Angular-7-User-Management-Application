import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { LoginVm } from './login-vm.model';

export class RegisterVm extends LoginVm {
    @ApiModelPropertyOptional({ example: 'John' })
    firstName?: string;

    @ApiModelPropertyOptional({ example: 'Doe' })
    lastName?: string;
    @ApiModelPropertyOptional({example: 'Irvine,  CA'})
    address?: string;
    @ApiModelPropertyOptional({example: 25})
     age?: number;
    @ApiModelPropertyOptional({example: 150000})
     salary?: number;
}
