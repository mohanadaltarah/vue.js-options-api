<template>
  <keep-alive>
    <div class="form">
      <form action="" @submit.prevent="addMember">
        <div>
          <label for="firstName">First Name</label>
          <input
            v-model="member.firstName"
            type="text"
            name="firstName"
            id="firstName"
          />
        </div>
        <div>
          <label for="lastName">Last Name</label>
          <input
            v-model="member.lastName"
            type="text"
            name="lastName"
            id="lastName"
          />
        </div>
        <div>
          <label for="age">Age</label>
          <input v-model="member.age" type="number" name="age" id="age" />
        </div>
        <div>
          <label for="email">Email</label>
          <input v-model="member.email" type="email" name="email" id="email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            v-model="member.password"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div>
          <h3>Gender</h3>
          <label>Male</label>
          <input
            v-model="member.gender"
            type="radio"
            name="male"
            id="male"
            value="Male"
          />
          <label>Female</label>
          <input
            v-model="member.gender"
            type="radio"
            name="female"
            id="female"
            value="Female"
          />
        </div>
        <div>
          <h3>Favorite Books</h3>
          <label>Ayuhalwalad</label>
          <input
            v-model="member.favBooks.ayuhalwalad"
            type="checkbox"
            name="ayuhalwalad"
          />
          <label>Arbawoon</label>
          <input
            v-model="member.favBooks.arbawoon"
            type="checkbox"
            name="arbawoon"
          />
          <label>Ihya</label>
          <input v-model="member.favBooks.ihya" type="checkbox" name="ihya" />
        </div>
        <div>
          <h3>Ability</h3>
          <select v-model="member.ability" name="ability" id="ability">
            <option value="able">Able</option>
            <option value="disable">Disable</option>
          </select>
        </div>
        <div>
          <label for="bio">Bio</label>
          <textarea v-model="member.bio" name="bio" id="bio" />
        </div>
        <div class="actions" style="width: 100%">
          <input style="width: 50%; margin: auto" type="submit" value="Save" />
        </div>
        <div>
          <ul>
            <li v-for="(memb, i) in members" :key="i">
              <p>Name: {{ memb.firstName }} {{ memb.lastName }}</p>
              <p>Email: {{ memb.email }}</p>
              <p>Gender: {{ memb.gender }}</p>
              <p>Age: {{ memb.age }}</p>
              <p>
                Favorite books:
                <strong>
                  <span v-for="(book, key, i) in memb.favBooks" :key="i">
                    <span v-if="book">{{ key }}<br /> </span>
                  </span>
                </strong>
              </p>
              <p>Bio: {{ memb.bio }}</p>
            </li>
          </ul>
        </div>
      </form>
    </div>
  </keep-alive>
</template>
<script>
export default {
  data() {
    return {
      member: {
        firstName: "",
        lastName: "",
        age: null,
        email: "",
        password: "",
        gender: "",
        favBooks: {
          ayuhalwalad: false,
          arbawoon: false,
          ihya: false,
        },
        ability: "",
        bio: "",
      },
      members: [],
    };
  },
  methods: {
    addMember() {
      this.members.push(this.member);
      this.member = {
        firstName: "",
        lastName: "",
        age: null,
        email: "",
        password: "",
        gender: "",
        favBooks: {
          ayuhalwalad: false,
          arbawoon: false,
          ihya: false,
        },
        ability: "",
        bio: "",
      };
    },
  },
};
</script>

<style lang="scss">
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 50px;
  background-color: aliceblue;
  width: 50vw;
  margin: auto;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    gap: 20px;
  }
}
</style>
