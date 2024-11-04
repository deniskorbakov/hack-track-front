import {createRouter, createWebHistory} from "vue-router";

import Home from "../pages/Home.vue";
import Profile from "../pages/Profile.vue";
import Team from "../pages/Team.vue";
import Task from "../pages/Task.vue";
import Statistic from "../pages/Statistic.vue";
import {
    UserGroupIcon,
    PresentationChartLineIcon,
    HomeIcon,
    RectangleStackIcon,
    UserIcon
} from "@heroicons/vue/24/solid";

const routes = [
    {
        path: "/",
        component: Home,
        meta: {
            icon: HomeIcon
        }
    },
    {
        path: "/profile",
        component: Profile,
        meta: {
            icon: UserIcon
        }
    },
    {
        path: "/teams",
        component: Team,
        meta: {
            icon: UserGroupIcon
        }
    },
    {
        path: "/tasks",
        component: Task,
        meta: {
            icon: RectangleStackIcon
        }
    },
    {
        path: "/statistic",
        component: Statistic,
        meta: {
            icon: PresentationChartLineIcon
        }
    },
];

const router = createRouter({
    linkActiveClass: 'text-primary',
    history: createWebHistory(),
    routes,
});

export default router;