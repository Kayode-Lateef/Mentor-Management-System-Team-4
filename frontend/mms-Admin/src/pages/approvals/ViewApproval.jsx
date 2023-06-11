import { Button, Grid, Stack, Typography } from '@mui/material'
import { Outlet } from 'react-router'
import { MentorManager, MentorRequest, ProgramRequest } from 'src/components/icons'
import CategoryItem from './CategoryItem'
import UserCardView from './UserCardView'

export default function ViewApproval() {
    return (
        <Grid container columns={3} spacing={2}>
            <Grid item xs={1}>
                <Typography
                    sx={{ fontSize: 20, fontWeight: "bold", color: "common.black", pb: 2 }}
                >Category</Typography>
                <Stack spacing={1}>
                    <CategoryItem
                        image={MentorManager}
                        title='Mentor Manager Requests'
                        value={287}
                    />
                    <CategoryItem
                        image={MentorRequest}
                        title='Mentor Requests'
                        value={160}
                    />
                    <CategoryItem
                        image={ProgramRequest}
                        title='Program Requests'
                        value={287}
                    />
                    <Typography
                        sx={{ fontSize: 20, fontWeight: "bold", color: "common.black" }}
                    >Recent</Typography>
                    <UserCardView
                        name='Kabiru Ibrahim'
                        role='Program Assistant, And....'
                    />
                    <UserCardView
                        name='Kabiru Ibrahim'
                        role='Program Assistant, And....'
                    />
                    <UserCardView
                        name='Kabiru Ibrahim'
                        role='Program Assistant, And....'
                    />
                    <UserCardView
                        name='Kabiru Ibrahim'
                        role='Program Assistant, And....'
                    />
                    <UserCardView
                        name='Kabiru Ibrahim'
                        role='Program Assistant, And....'
                    />
                </Stack>
            </Grid>
            <Grid item xs={2}>
                <Stack direction="row" justifyContent="space-between" py={2}>
                    <Typography
                        sx={{ fontSize: 20, fontWeight: "bold", color: "common.black" }}
                    >Mentor Manager Requests</Typography>
                    <Button>Add New Mentor Manager</Button>
                </Stack>
                <Stack spacing={1} sx={{ maxHeight: "80vh", overflow: "scroll" }}>
                    <Outlet />
                </Stack>
            </Grid>
        </Grid>
    )
}
