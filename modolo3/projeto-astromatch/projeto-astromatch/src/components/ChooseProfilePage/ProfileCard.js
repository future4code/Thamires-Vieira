import React from "react";
import styled from "styled-components";

const ProfileCardContainer = styled.div`
  margin: 10px;
  border: gray 1px solid;
`;

const ProfilePicture = styled.img`
  width: 100%;
  display: block;
  max-height: 350px;
`;

const ProfileInfo = styled.div`
  padding: 0 10px;
`;

function ProfileCard(props) {
  const { name, age, bio, photo } = props.profile;

  return (
    <ProfileCardContainer>
      <ProfilePicture src={photo} />
      <ProfileInfo>
        <h3>
          {name}, {age}
        </h3>
        <p>{bio}</p>
      </ProfileInfo>
    </ProfileCardContainer>
  );
}

export default ProfileCard;
