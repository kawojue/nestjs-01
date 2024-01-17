import { Body, Controller, Get, Param, Post, Patch, Delete } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll() {
        return []
    }

    @Get('interns')
    findAllInterns() {
        return []
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return { id }
    }

    @Post()
    create(@Body() user: {}) {
        return user
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() user: {}) {
        return { id, ...user }
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return { id }
    }

}
