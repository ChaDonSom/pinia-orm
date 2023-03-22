<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
        elevated
        reveal
    >
      <q-toolbar>
        <q-toolbar-title>Pinia ORM</q-toolbar-title>
        <q-space />
        <q-btn
            v-if="$route.path !== '/login'"
            to="/login"
            label="Login"
            no-caps
            flat
            rounded
            class="gt-xs"
        />
        <q-btn
            v-if="$route.path !== '/register'"
            to="/register"
            label="Register"
            no-caps
            flat
            rounded
            class="gt-xs"
        />
        <q-btn
            round
            icon="r_more_vert"
            flat
            class="lt-sm"
        >
          <q-menu auto-close>
            <q-item
                v-if="$route.path !== '/login'"
                clickable
                to="/login"
            >
              <q-item-section>
                Login
              </q-item-section>
            </q-item>
            <q-item
                v-if="$route.path !== '/register'"
                clickable
                to="/register"
            >
              <q-item-section>
                Register
              </q-item-section>
            </q-item>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
