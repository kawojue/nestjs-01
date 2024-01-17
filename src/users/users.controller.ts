import { Body, Controller, Get, Param, Post, Patch, Delete, Query } from '@nestjs/common'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    findAll(@Query('role') role?: Role) {
        return this.usersService.findAll(role)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id)
    }

    @Post()
    create(@Body() user: {}) {
        return user
    }

    @Patch(':id')
    updateOne(@Param('id') id: string, @Body() user: {}) {
        return { id, ...user }
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string) {
        return { id }
    }

}
